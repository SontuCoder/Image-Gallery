import express from 'express';
const router = express.Router();
import { admin } from '../Controller/Admin.js';
import { postFiles, getFiles } from '../Controller/FileController.js';
import { postImg, getImg } from '../Controller/ImgController.js';
import upload from '../multerConfig/imgConfig.js';


// POST route for File
router.post('/file',postFiles); 

// POST route for Img
router.post('/img',upload.array("userimg"), postImg);

// GET route for Admin  
router.get('/admin', admin);

// GET route for File
router.get('/file', getFiles);

// GET route for Img
router.get('/img', getImg);

export default router;