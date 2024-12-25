import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img.jsx';

const ImgPage = ({category}) => {
    return (
        <div className="image-page">
            <h2>{category}</h2>
            <div className="image-gallery">
                {images.map((image) => (
                    <Img key={image.id} name={image.name} category={image.category} images={image.images} />
                ))}
            </div>
        </div>
    );
};

ImgPage.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired
};

export default ImgPage;