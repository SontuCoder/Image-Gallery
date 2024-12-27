import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/pexels-photo-4576085.jpeg';

import pic1 from '../assets/ExampleImg/IMG-20240908-WA0020.jpg';
import pic2 from '../assets/ExampleImg/IMG-20240908-WA0021.jpg';
import pic3 from '../assets/ExampleImg/IMG-20240908-WA0022.jpg';
import pic4 from '../assets/ExampleImg/IMG-20240908-WA0023.jpg';
import pic5 from '../assets/ExampleImg/IMG-20240908-WA0024.jpg';
import pic6 from '../assets/ExampleImg/IMG-20240908-WA0025.jpg';
import pic7 from '../assets/ExampleImg/IMG-20240908-WA0026.jpg';
import pic8 from '../assets/ExampleImg/IMG-20240908-WA0027.jpg';
import pic9 from '../assets/ExampleImg/IMG-20240908-WA0028.jpg';
import pic10 from '../assets/ExampleImg/IMG-20240908-WA0029.jpg';
import pic11 from '../assets/ExampleImg/IMG-20240908-WA0030.jpg';
import pic12 from '../assets/ExampleImg/IMG-20240908-WA0031.jpg';
import pic13 from '../assets/ExampleImg/IMG-20240908-WA0032.jpg';
import pic14 from '../assets/ExampleImg/Screenshot 2024-09-08 193214.png';
import pic15 from '../assets/ExampleImg/Screenshot 2024-09-12 115206.png';
import pic16 from '../assets/ExampleImg/Screenshot 2024-10-03 185758.png';
import pic17 from '../assets/ExampleImg/Screenshot 2024-10-23 112920.png';
import pic18 from '../assets/ExampleImg/Screenshot 2024-12-03 172956.png';
import Img from './Img';


const ImgPage = () => {
    const location = useLocation();

    // Extract query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const queryParamsObj = Object.fromEntries(queryParams.entries());

    // Example usage of queryParamsObj
    const { fileType, fileName, fileLogo } = queryParamsObj;
    




    
    let pic  = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18];

    return (
        <div className="image-page">
            <div className="profile">

                <div className="imgPage-details">
                    <div className='page-logo'>
                        <img src={logo} alt={logo} />
                    </div>
                    <div className="img-text">
                    <h3 className="filename">{fileName}</h3>
                    <p className="filetype">{fileType}</p>
                    </div>
                </div>
            </div>
            <div className="img-display">
                {
                    pic.map((img, index) => (
                            <Img key={index} fileName={img} />
                ))
                }
            </div>
        </div>
    );
};

export default ImgPage;
