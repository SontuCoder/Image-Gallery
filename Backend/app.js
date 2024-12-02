import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import './Config/db.js';

import cors from 'cors';
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("Server is ready");
})

app.listen(PORT, () => {
    console.log("=================================");
    console.log(`Server is running on port ${PORT}`);
    console.log("=================================");
});