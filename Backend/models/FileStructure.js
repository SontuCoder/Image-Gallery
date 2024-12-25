import mongoose from "mongoose";

const FileStructure = new mongoose.Schema({
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

const File = mongoose.model('Files',FileStructure);
export default File;