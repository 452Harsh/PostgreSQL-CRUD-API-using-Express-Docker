import express from 'express'
import { createUser, deleteUser, getAllUsers, getUserId, updateUser } from '../controller/userController.js';
import validatedUser from '../middleware/inputValidator.js';
const router = express.Router();

router.post("/user",validatedUser,createUser);
router.get("/user",getAllUsers);
router.get("/user/:id",getUserId);
router.put("/user/:id",validatedUser,updateUser);
router.delete("/user/:id",deleteUser);

export default router;