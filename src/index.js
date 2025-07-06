import express from "express";
import cors from "cors";
import 'dotenv/config';
import pool from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import errorHandling from "./middleware/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

const app = express();
const port = process.env.PORT || 3200;
console.log(port)

// Middleware
app.use(express.json());
app.use(cors());

// Routes handling
app.use('/api',userRoutes);

// Error middleware handling
app.use(errorHandling);


//creating table before starting a server
createUserTable()


// Testing postgres connection 
app.get('/',async (req,res)=>{
    const result = await pool.query("SELECT current_database()")
    res.send(`The database name is : ${result.rows[0].current_database}`)
})


// Server running
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
