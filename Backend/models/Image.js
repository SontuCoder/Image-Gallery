import mongoose from "mongoose";

const ImageStructure = new mongoose.Schema({
    fileName:{
        type: String,
        required: true,
        unique:true
    },
    fileType:{
        type: String,
        required: true,
        unique:true
    }
});

const Image = mongoose.model('File',ImageStructure);
export default Image;