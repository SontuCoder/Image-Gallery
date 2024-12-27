import React from 'react';
import ImgCards from '../Components/ImgCards';
import { Button2 } from '../Components/Button';
import logo1 from "../assets/pexels-photo-4576085.jpeg";


import { useEffect, useState } from 'react';
import axios from 'axios';


const ImageCollection = () => {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            const ports = [3030, 5005];
            for (const port of ports) {
                try {
                    const response = await axios.get(`http://localhost:${port}/api/file`);
                    if (response.data.success) {
                        setFiles(response.data.files);
                        break;
                    }
                } catch (error) {
                    console.error(`Error fetching from port ${port}:`, error);
                    continue;
                }
            }
        };

        fetchFiles();
    }, []);



    return (
        <div className='collection' id='collection'>
            <div className="container">
                <div className="text-section" id='collection-header'>
                    <h1 className="heading-2" >Collections</h1>
                    <Button2 link={"#home"} />
                </div>
                <div className="img-cards">
                    {files.map((file, index) => (
                        <ImgCards key={index} fileName={file.fileName} fileType={file.fileType} fileLogo={logo1} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ImageCollection
