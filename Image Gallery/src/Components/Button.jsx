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

const Button2 = ({ link}) => {
    return (
        <div className="button2">
            <a href={link}>
            <i class="fa-solid fa-pen-to-square"></i>
            </a>
        </div>
    )
}

Button2.propTypes = {
    link: PropTypes.string.isRequired
}



export { Button1, Button2 }
