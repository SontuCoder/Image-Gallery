import React from 'react';
import ImgCards from '../Components/ImgCards';
import { Button2 } from '../Components/Button';
import logo from "../assets/pexels-photo-4576085.jpeg";


const ImageCollection = () => {
    return (
        <div className='collection' id='collection'>
            <div className="container">
                <div className="text-section" id='collection-header'>
                    <h1 className="heading-2" >Collections</h1>
                    <Button2 link={"#home"} />
                </div>
                <div className="img-cards">
                    <ImgCards fileName="Hello" fileType="Hi" fileLogo={logo} />
                    <ImgCards fileName="Hello" fileType="Hi" fileLogo={logo} />
                    <ImgCards fileName="Hello" fileType="Hi" fileLogo={logo} />
                    <ImgCards fileName="Hello" fileType="Hi" fileLogo={logo} />
                    <ImgCards fileName="Hello" fileType="Hi" fileLogo={logo} />
                    <ImgCards fileName="Hello" fileType="Hi" fileLogo={logo} />
                    <ImgCards fileName="Hello" fileType="Hi" fileLogo={logo} />
                </div>

            </div>
        </div>
    )
}

export default ImageCollection
