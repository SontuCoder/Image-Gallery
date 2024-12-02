import React from 'react';
import {Button1} from '../Components/Button';

const Home = () => {
    return (
        <div className='home-div'>
            <div className="container">
                <div className="text-section">
                    <h1 className='heading-1'>
                        MEMORIES
                    </h1>
                    <h3 className="pera home-pera">
                        Click Photo and Make Memories
                    </h3>
                    <Button1/>
                </div>
            </div>
        </div>
    )
}

export default Home
