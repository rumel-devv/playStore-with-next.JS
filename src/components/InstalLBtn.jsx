'use client'
import React from 'react';
import { FaDownload } from 'react-icons/fa';


const handleInstall = () => {
    alert('helo')
}


const InstalLBtn = () => {
    return (
        <div>
             <button onClick={() => handleInstall()}  className="btn text-green-600"> <FaDownload></FaDownload> Download Now</button>

        </div>
    );
};

export default InstalLBtn;