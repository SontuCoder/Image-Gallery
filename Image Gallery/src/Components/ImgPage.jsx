import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Img from './Img';
import axios from 'axios';
import toast from 'react-hot-toast';

const ImgPage = () => {
    const location = useLocation();

    // Extract query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const queryParamsObj = Object.fromEntries(queryParams.entries());

    // Example usage of queryParamsObj
    const { fileType, fileName, fileLogo } = queryParamsObj;

    // pic upload modal 
    const [uploadModal, setUploadModal] = useState(false);

    const upload = () => {
        setUploadModal(!uploadModal);
    }

    // Pic uploads
    const [files, setFiles] = useState([]);

    const handleFileChange = (event)=>{
        let fileOfFiles = [];
        for(let img of event.target.files){
            fileOfFiles.push(img);
        }
        setFiles(fileOfFiles);
    }

    const uploadImg = async(event)=>{
        event.preventDefault();

        if(files.length === 0){
            toast.error("Select Images first.",{
                position: "top-center"
            });
            return;
        };

        const config = {
            headers:{
                "Content-Type" : "multipart/form-data"
            }
        }

        const formData = new FormData();
        formData.append("fileType",fileType);

        for(let filesdata of files){
            formData.append("userimg",filesdata);
        }
        
        await axios.post(`http://localhost:3030/api/img`, formData, config)
        .then(res=>{
            if(res.data.success){
                toast.success(res.data.message,{
                    position:"top-center"
                });
                setUploadModal(false);
                handleGetPic();
            } else {
                toast.error(res.data.message,{
                    position:"top-center"
                });
                setUploadModal(false);
            }
        })
        .catch(err=>{
            toast.error("Some error occurs! Plz try again leter",{
                position:"top-center"
            });
            setUploadModal(false);
        });
    }

    const cancel = () => {
        setUploadModal(false);
    }

    const [picFiles, setPicFiles] = useState([]);

    const handleGetPic = async()=>{
        await axios.get(`http://localhost:3030/api/img?fileType=${fileType}`)
        .then(res=>{
            if(res.data.success){
                setPicFiles(res.data.img); 
            } else {
                toast.error(res.data.error,{
                    position:"top-center"
                });
            }
        }).catch(err=>{
            toast.error("Some error occurs! Plz try again leter",{
                position:"top-center"
            });
        });
    }

    useEffect(()=>{
        handleGetPic()
    },[fileType]);


    const refreshImages = () => {
        handleGetPic();
    };

    return (
        <div className="image-page">
            <div className="profile">
                <div className="imgPage-details">
                    <div className='page-logo'>
                        <img src={fileLogo} alt={fileLogo} />
                    </div>
                    <div className="img-text">
                        <h3 className="filename">{fileName}</h3>
                        <p className="filetype">{fileType}</p>
                    </div>
                </div>

                <button className='upload' onClick={upload}>
                    <i className="fa-solid fa-upload"></i>
                </button>

            </div>

            {uploadModal && (
                <>
                    <div className="modal-overlay" onClick={cancel}></div>
                    <div className={`uploadModal ${uploadModal ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>

                    <h1 id='uploadHeading'>Upload Your Images</h1>
                        <form >
                            <input type="file" name="pic" id="pic" onChange={handleFileChange} multiple={true} />
                            <button type="submit" id='submit' className='buttonUpload' onClick={uploadImg}>Upload</button>

                        </form>

                        <button id='cancel' className='buttonUpload' onClick={()=>cancel()}> Cancel</button>
                    </div>
                </>
            )}

            <div className="img-display">
                {
                    picFiles.length>0 && (picFiles.map((img,index) => (
                        <Img key={index} fileName={`http://localhost:3030/uploads/${img.fileName.split('\\').pop()}`} refreshImages={refreshImages}/>
                    )))
                }
            </div>
        </div>
    );
};

export default ImgPage;
