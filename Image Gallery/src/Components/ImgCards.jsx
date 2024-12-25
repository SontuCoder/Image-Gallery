import React from 'react';
import PropTypes from 'prop-types';

const ImgCards = ({fileName, fileType, fileLogo}) => {
    return (
        <div className="cards">
            <div className='inner-card'>
            <img src={fileLogo} alt="logo" />
            <h3>{fileName}</h3>
            </div>
            <div className="card-icon">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash dustbin"></i>
            </div>
        </div>
    )
}

ImgCards.prototype = {
    fileLogo: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    fileType: PropTypes.string.isRequired
}

export default ImgCards;
