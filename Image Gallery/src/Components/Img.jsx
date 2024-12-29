import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import axios from "axios";

const Img = ({ fileName, refreshImages }) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const cancle = () => {
        setModal(false);
    }

    const download = async (imageSrc, fileName) => {
        try {
            toast.loading("Downloading...", { position: "top-center" });
            const response = await fetch(imageSrc);
            if (!response.ok) throw new Error('Download failed');

            const blob = await response.blob();
            const link = document.createElement("a");

            const cleanFileName = imageSrc.split('/').pop();

            link.href = URL.createObjectURL(blob);
            link.download = cleanFileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);

            toast.dismiss();
            toast.success("Download completed!", {
                position: "top-center",
                style: {
                    background: '#333',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '10px',
                }
            });
            cancle();
        } catch (error) {
            toast.dismiss();
            toast.error("Download failed!", {
                position: "top-center",
                style: {
                    background: '#ff4444',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '10px',
                }
            });
        }
    }

    const [deleteModal, setDeleteModal] = useState(false);

    const deletePicModel = () => {
        setDeleteModal(true);
    }

    const deletePicModelOff = () => {
        setDeleteModal(false)
    }

    const deletePic =()=>{
        const file = fileName.split('/').pop();
        axios.delete(`http://localhost:3030/api/img`, {params: {fileName: file}})
        .then(res=>{
            if (res.data.success) {
                refreshImages();
                toast.success(res.data.message, {
                    position: "top-center"
                });
                setDeleteModal(false)
                setModal(false);
            } else {
                toast.error(res.data.message, {
                    position: "top-center"
                });
            }
        })
        .catch(err => {
            toast.error("Error deleting file", {
                position: "top-center"
            });
        });
    }



    return (
        <>
            <div className={`gallery-item`}>
                <img src={fileName} alt="Gallery Item" onClick={toggleModal} />
            </div>

            {modal && (
                <>
                    <div className="modal-overlay" onClick={cancle}></div>
                    <div className={`modal ${modal ? "open" : ""}`}>
                        <img src={fileName} alt="Gallery Item" />
                        <div className="buttons">
                            <button className="delete" onClick={() => deletePicModel(fileName)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                            <button className="close" onClick={cancle}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                            <button className="download" onClick={() => download(fileName, fileName)}>
                                <i className="fa-solid fa-download"></i>
                            </button>
                        </div>
                    </div>
                </>
            )}


            {deleteModal && (
                <>
                    <div className="modal-overlay deleteModal-overlay" onClick={() => deletePicModelOff()}></div>
                    <div className={`modal ${deleteModal ? "open":""}`} id="deletemodal">
                        <h3>Are sure to delete?</h3>
                        <button className="deletePicbutton" style={{ backgroundColor: "Green" }} onClick={() => deletePicModelOff()} >
                            No
                        </button>
                        <button className="deletePicbutton" style={{ backgroundColor: "Red" }} onClick={()=>deletePic()}>
                            Yes
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

Img.propTypes = {
    fileName: PropTypes.string.isRequired,
    refreshImages: PropTypes.func.isRequired,
};

export default Img;
