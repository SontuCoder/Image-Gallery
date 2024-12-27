import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const ImgCards = ({ fileName, fileType, fileLogo }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Encode parameters to ensure they are URL-safe
        const queryParams = new URLSearchParams({
            fileType,
            fileName,
            fileLogo,
        }).toString();

        navigate(`/ImgPage?${queryParams}`);
    };


    return (
            <div className="cards" onClick={handleClick}>
                <div className='inner-card'>
                    <img src={fileLogo} alt="logo" />
                    <h3>{fileName}</h3>
                </div>
                <div className="card-icon">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash dustbin"></i>
                </div>
            </div>
    )
}

ImgCards.propTypes = {
    fileLogo: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    fileType: PropTypes.string.isRequired
}

export default ImgCards;
