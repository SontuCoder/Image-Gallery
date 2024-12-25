
import multer from "multer";

const stotage = multer.diskStorage({
    destination: (req,file, callback)=>{
        callback(null, "./imageUploads");
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}-${file.originalname}`;
        callback(null,filename);
    }
})

const fileFilter = (req, file, callback) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/pdf" || file.mimetype === "image/jpg") {
        callback(null, true);
    } else {
        callback(new Error("Only jpeg, jpg, png, and pdf files are allowed"), false);
    }
};


const upload = multer({
    storage: stotage,
    fileFilter: fileFilter
});

export default upload;