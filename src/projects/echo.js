import React from "react";

import { FiDownload } from 'react-icons/fi'
import eskapad_img from '../assets/echo_mockup-compressed.jpg'

const Echo = () => {
    const handleMouseOver = (e) => {
        console.log(e)
        document.getElementById('echo_image').classList.add('removeFilter');
        document.getElementById('echo_overlay').classList.add('remove');

    }

    const handleMouseOut = () => {
        console.log("out")
        document.getElementById('echo_image').classList.remove('removeFilter');
        document.getElementById('echo_overlay').classList.remove('remove');
    }
    return (
        <div className="work-project">
            <div className="project-img" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={eskapad_img} alt="eskapad_img" id="echo_image" />
                <div className="overlay" id="echo_overlay"></div>
                <div className="project-desc-overlay">
                    <span>Personal Project</span>
                    <h1>Echo</h1>
                    <div className="project-desc">
                        <p>A real-time chat application which takes inspiration from some very popular messaging apps. You can send audio, texts, stickers, images and gifs. Theme customisation available from lost of presets to choose from. Turn your image into text using text vision feature available only on echo.</p>
                    </div>
                    <span>React Native &ensp; Node &ensp; Express &ensp; Mongo db</span>
                    <a href="https://drive.google.com/file/d/1_rybjAk61EtNqT2EN-k83EPboum_Cp-X/view?usp=sharing" download rel="noopener noreferrer" target="_blank" className="download-icon">
                        <FiDownload size={22} />
                    </a>
                </div>
            </div>
            <div className="project-content">
                <span>Personal Project</span>
                <h1>Echo</h1>
                <div className="project-desc">
                    <p>A real-time chat application which takes inspiration from some very popular messaging apps. Create groups or chat with your friends on echo. Supports contact sync just like whatsapp. You can send audio, texts, stickers, images and gifs. Theme customisation available from lots of presets to choose from. Turn your image into text using text vision feature available only on echo.</p>
                </div>
                <span>React Native &ensp; Amplify &ensp; Firebase &ensp; Google Vision</span>
                <a href="https://drive.google.com/file/d/1_rybjAk61EtNqT2EN-k83EPboum_Cp-X/view?usp=sharing" download rel="noopener noreferrer" target="_blank" className="download-icon">
                    <FiDownload size={22} />
                </a>
            </div>
        </div>
    )
}

export default Echo;