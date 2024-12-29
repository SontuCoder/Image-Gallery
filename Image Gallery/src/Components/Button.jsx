import React from 'react';
import PropTypes from 'prop-types';


const Button1 = ({ link, text }) => {
    return (
        <div className="button">
            <a href={link}>{text}</a>
        </div>
    )
}

Button1.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

// Button 2

const Button2 = ({handleClick}) => {
    return (
        <button className="button2" onClick={handleClick}>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>
    )
}



export { Button1, Button2 }
