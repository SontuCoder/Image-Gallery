import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const Img = ({ fileName }) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const cancle = () => {
        setModal(false);
    }
    const download = (imageSrc, fileName) => {
        const link = document.createElement("a");
        link.href = imageSrc;
        link.download = fileName; 
        document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link);
        toast.success("Download completed !",{position: "top-center"});
        cancle();   
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
                        <button className="close" onClick={cancle}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <button className="download" onClick={()=>download(fileName, fileName)}>
                            <i className="fa-solid fa-download"></i>
                        </button>
                    </div>
                </div>
                </>
            )}
        </>
    );
};

Img.propTypes = {
    fileName: PropTypes.string.isRequired,
};

export default Img;
