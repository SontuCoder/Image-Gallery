import FileDB from '../models/FileStructure.js';

export const getFiles = async (req, res) => {
    try {
        const files = await FileDB.find({});
        res.status(200).json({ success: true, files });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching files' });
    }
};

export const postFiles = async (req, res) => {
    const { fileName, fileType} = req.body;
    if(!fileName || !fileType ){
        return res.status(400).send({success: false, message: 'Please provide all the required fields'});
    } else {
        try {
            const previewFile = await FileDB.findOne({fileName, fileType});

            if(previewFile){
                return res.status(400).send({success: false, message: 'File already exists'});
            }

            const file = new FileDB({ fileName, fileType});
            await file.save();

            res.status(201).send({success: true, message: 'File created successfully'});
        } catch (error) {
            console.error('Error in postFiles:', error);
            res.status(400).send({success: false, message: 'File creation failed'});
        }
    }
};