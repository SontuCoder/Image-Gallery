import express from 'express';
const app = express();
import Router from './routers/Router.js';

import dotenv from 'dotenv';
dotenv.config();

import './Config/db.js';

import cors from 'cors';
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5005;

app.get('/',(req,res)=>{
    res.status(200).json("Server is ready");
})

app.use('/uploads', express.static('./imageUploads'));

app.use('/api', Router);


app.listen(PORT, () => {
    console.log("=================================");
    console.log(`Server is running on port ${PORT}`);
    console.log("=================================");
});