import ImgSchema from '../models/Image.js';
import fs from 'fs';
import path from 'path';


export const getImg = async (req, res) => {
    const fileType = req.query.fileType;
    if (!fileType) {
        res.status(400).json({ success: false, error: 'Here accured some error to get fileType' });
    } else {
        try {
            const img = await ImgSchema.find({ fileType });
            res.status(200).json({ success: true, img });
        } catch (error) {
            console.error("error to get img in img Controller:" + error);
            res.status(500).json({ success: false, error: 'Server Error' });
        }
    }
};

export const postImg = async (req, res) => {
    const files = req.files.length > 0 && req.files;
    const { fileType } = req.body;

    if (!fileType || !files) {
        res.status(400).json({ success: false, error: 'Please provide fileType and files' });
    } else {
        try {
            files.forEach(async element => {
                const img = new ImgSchema({
                    fileName: element.path,
                    fileType
                });
                await img.save();
            });
            res.status(200).json({
                success: true,
                message: 'Img uploaded successfully'
            });
        } catch (error) {
            console.error("error to upload img in img Controller:" + error);
            res.status(500).json({ success: false, error: 'Server Error' });
        }
    }
};

export const deleteImg = async(req,res)=>{
    try{
        const {fileName} = req.query;
        let file = "imageUploads\\" + fileName;
        const isExist = await ImgSchema.findOne({fileName:file});
        if(!isExist){
            return res.status(404).send({ success: false, message: 'Img not found' });
        }

        const filePath = path.join(process.cwd(), 'imageUploads', fileName);
        // Delete file using promisified fs.unlink
        await fs.promises.unlink(filePath);

            // Delete the file reference from the database


        const deletedImg = await ImgSchema.findByIdAndDelete(isExist._id);
        if (!deletedImg) {
            return res.status(404).send({ success: false, message: 'Failed to delete file reference from database' });
        }

        res.status(200).send({ success: true, message: 'File deleted successfully' });

    } catch (error) {
        res.status(500).send({ success: false, message: 'Internal server error',
        });
    }
}