import React from "react";

import { HiOutlineExternalLink } from 'react-icons/hi'
import cryptofox_img from '../assets/cryptofox.jpg'

const CryptoFox = () => {
    const handleMouseOver = (e) => {
        console.log(e)
        document.getElementById('cryptofox_image').classList.add('removeFilter');
        document.getElementById('cryptofox_overlay').classList.add('remove');

    }

    const handleMouseOut = () => {
        console.log("out")
        document.getElementById('cryptofox_image').classList.remove('removeFilter');
        document.getElementById('cryptofox_overlay').classList.remove('remove');
    }
    return (
        <div className="work-project">
            <div className="project-img" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={cryptofox_img} alt="eskapad_img" id="cryptofox_image" />
                <div className="overlay" id="cryptofox_overlay"></div>
                <div className="project-desc-overlay">
                    <span>Personal Project</span>
                    <h1>CryptoFox</h1>
                    <div className="project-desc">
                        <p>CryptoFox is a wallet app where one can transfer goerli eth from one wallet to another. just connect your Metamask wallet and send goerli eth in realtime to other wallets. You can also keep track of your latest transactions.</p>
                    </div>
                    <span>React Metamask Goerli HTML & CSS</span>
                    <a href="https://cryptofox.vercel.app/" rel="noopener noreferrer" target="_blank" className="download-icon">
                        <HiOutlineExternalLink size={22} />
                    </a>
                </div>
            </div>
            <div className="project-content">
                <span>Personal Project</span>
                <h1>CryptoFox</h1>
                <div className="project-desc">
                    <p>CryptoFox is a wallet app where one can transfer goerli eth from one wallet to another. just connect your Metamask wallet and send goerli eth in realtime to other wallets. You can also keep track of your latest transactions.
                        (Open in laptop or desktop)
                    </p>
                </div>
                <span>React Metamask Goerli HTML & CSS</span>
                <a href="https://cryptofox.vercel.app/" rel="noopener noreferrer" target="_blank" className="download-icon">
                    <HiOutlineExternalLink size={22} />
                </a>
            </div>
        </div>
    )
}

export default CryptoFox;