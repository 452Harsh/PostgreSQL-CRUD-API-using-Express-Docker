import { createUserService, deleteUserService, getAllUserByIdService, getAllUserService, updateUserService } from "../models/userModel.js";

const handleResponse = (res,status,message,data = null)=>{
    res.status(status).json({
        status,
        message,
        data
    })
}
export const createUser = async (req,res,next)=>{
    const {name, email } = req.body;
    try {
        const newUser = await createUserService(name , email);
        handleResponse(res,201,"user created succesfully",newUser)
    } catch (error) {
        next(error)
    }
}
export const getAllUsers = async (req,res,next)=>{
    try {
        const users = await getAllUserService();
        handleResponse(res,200,"user fetched succesfully",users)
    } catch (error) {
        next(error)
    }
}
export const getUserId = async (req,res,next)=>{
    try {
        const user = await getAllUserByIdService(req.params.id);
        if(!user) handleResponse(res,400,"user not found",user)
        handleResponse(res,200,"user found",user)
    } catch (error) {
        next(error)
    }
}
export const updateUser= async (req,res,next)=>{
    const {name,email} = req.body;
    try {
        const user = await updateUserService(req.params.id,name,email);
        if(!user) return handleResponse(res,400,"user not found",user)
        handleResponse(res,200,"user update ",user)
    } catch (error) {
        next(error)
    }
}
export const deleteUser = async (req,res,next)=>{
    try {
        const user = await deleteUserService(req.params.id);
        if(!user) handleResponse(res,400,"user not found",user)
        handleResponse(res,200,"user deleted",user)
    } catch (error) {
        next(error)
    }
}