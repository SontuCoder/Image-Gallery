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
    }
});

const Image = mongoose.model('Images',ImageStructure);
export default Image;