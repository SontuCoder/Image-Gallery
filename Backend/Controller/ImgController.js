import ImgSchema from '../Models/Image.js';

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