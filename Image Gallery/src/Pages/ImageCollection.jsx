import React, { useEffect, useState } from 'react';
import ImgCards from '../Components/ImgCards';
import { Button2 } from '../Components/Button';
import axios from 'axios';
import toast from 'react-hot-toast';

const ImageCollection = () => {

    // Get Folders
    const [files, setFiles] = useState([]);

    const fetchFiles = async () => {
        try {
            const response = await axios.get(`http://localhost:3030/api/file`);
            if (response.data.success) {
                setFiles(response.data.files);
            } else {
                toast.error("Failed to fetch files", {
                    position: "top-center"
                });
            }
        } catch (error) {
            toast.error("Error loading files", {
                position: "top-center"
            });
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);


    // Control folder modal :-
    const [fileCreateModal, setCreateModal] = useState(false);

    const toggleModal = (e) => {
        e.preventDefault();
        setCreateModal(true);
    };

    const cancel = () => {
        setCreateModal(false);
    }

    // Create New folders:-

    const [folderName, setFolderName] = useState();
    const [folderType, setFolderType] = useState();
    const [folderLogo, setFolderLogo] = useState(null);

    const handleFolderCreate = (e) => {
        e.preventDefault();

        if (!folderLogo || !folderName || !folderType) {
            toast.error("Fill all feilds first.", {
                position: "top-center"
            });
            return;
        }

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        const formData = new FormData();
        formData.append("fileLogo", folderLogo);
        formData.append("fileName", folderName);
        formData.append("fileType", folderType);

        axios.post("http://localhost:3030/api/file", formData, config)
            .then(res => {
                if (res.data.success) {
                    toast.success(res.data.message, {
                        position: "top-center"
                    });
                    setCreateModal(false);
                    setFolderLogo(null);
                    setFolderName("");
                    setFolderType("");
                    fetchFiles();
                } else {
                    toast.error(res.data.message, {
                        position: "top-center"
                    });
                }
            }).catch(err => {
                toast.error("Failed to create folder!", {
                    position: "top-center"
                });
            })
    }


    return (
        <div className='collection' id='collection'>
            <div className="container">
                <div className="text-section" id='collection-header'>
                    <h1 className="heading-2" >Collections</h1>
                    <Button2 handleClick={toggleModal} />
                </div>

                <div className="img-cards">
                    {files.map((file, index) => (
                        <ImgCards key={index} fileName={file.fileName} fileType={file.fileType} fileLogo={`http://localhost:3030/logouploads/${file.fileLogo.split('\\').pop()}`} />
                    ))}
                </div>


                {fileCreateModal && (
                    <>
                        <div className="modal-overlay" onClick={cancel}></div>

                        <div className={`folderModal ${fileCreateModal ? "open" : ""}`} onClick={(e) => e.stopPropagation()} >
                            <div className="foldertext">
                                <h1 id="folderModal-h1">Hi, Admin</h1>
                                <h3 id="folderModal-h3">You can Create new Folder</h3>
                            </div>
                            <form>
                                <input type="text" className='folderFormInput' placeholder='Enter Folder name' required onChange={(e) => { setFolderName(e.target.value) }} />
                                <input type='text' className='folderFormInput' placeholder='Enter Folder type' required onChange={(e) => { setFolderType(e.target.value) }} />
                                <input type="file" name='pic' id="pic" className='folderFormInput' placeholder='Choose Folder logo' required onChange={(e) => { setFolderLogo(e.target.files[0]) }} />
                                <button id='uploadFolder' onClick={(e) => handleFolderCreate(e)}  >Create</button>

                            </form>
                            <button id='cancel' className='buttonUpload' onClick={() => cancel()}> Cancel</button>
                        </div>
                    </>
                )}


            </div>
        </div>
    )
}

export default ImageCollection;
