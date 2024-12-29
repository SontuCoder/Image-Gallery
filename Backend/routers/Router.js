import express from 'express';
const router = express.Router();
import { admin } from '../Controller/Admin.js';
import { postFiles, getFiles, deleteFiles } from '../Controller/FileController.js';
import { postImg, getImg, deleteImg } from '../Controller/ImgController.js';
import upload from '../multerConfig/imgConfig.js';
import logo from '../multerConfig/fileLogoConfig.js';



// POST route for File
router.post('/file',logo.single("fileLogo"),postFiles); 

// POST route for Img
router.post('/img',upload.array("userimg"), postImg);

// GET route for Admin  
router.get('/admin', admin);

// GET route for File
router.get('/file', getFiles);

// GET route for Img
router.get('/img', getImg);

// Delete Folder
router.get('/file', deleteFiles);
// Delete Img
router.delete('/img',deleteImg);

export default router;