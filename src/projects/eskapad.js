import React from "react";

import { FiDownload } from 'react-icons/fi'
import eskapad_img from '../assets/eskapad_mockup-compressed.jpg'

const Eskapad = () => {
    const handleMouseOver = (e) => {
        console.log(e)
        document.getElementById('eskapad_image').classList.add('removeFilter');
        document.getElementById('eskapad_overlay').classList.add('remove');

    }

    const handleMouseOut = () => {
        console.log("out")
        document.getElementById('eskapad_image').classList.remove('removeFilter');
        document.getElementById('eskapad_overlay').classList.remove('remove');
    }
    return (
        <div className="work-project">
            <div className="project-img" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={eskapad_img} alt="eskapad_img" id="eskapad_image" />
                <div className="overlay" id="eskapad_overlay"></div>
                <div className="project-desc-overlay">
                    <span>Featured Project</span>
                    <h1>Eskapad</h1>
                    <div className="project-desc">
                        <p>A social media platform for business and organisers based in France and Côte d'Ivoire. Worked as a frontend engineer with remote team in france. App supports french and english language. Coming soon on Play store & App store</p>
                    </div>
                    <span>React Native &ensp; Node &ensp; Express &ensp; Mongo db</span>
                    <a href="https://drive.google.com/file/d/1z02J-BYqB1Sik2DMQ76W1CBxrUixehU5/view?usp=sharing" download rel="noopener noreferrer" target="_blank" className="download-icon">
                        <FiDownload size={22} />
                    </a>
                </div>
            </div>
            <div className="project-content">
                <span>Featured Project</span>
                <h1>Eskapad</h1>
                <div className="project-desc">
                    <p>A social media platform for business and organisers based in France and Côte d'Ivoire. Worked as a frontend engineer with remote team in france. App supports french and english language. Coming soon on Play store & App store</p>
                </div>
                <span>React Native &ensp; Node &ensp; Express &ensp; Mongo db</span>
                <a href="https://drive.google.com/file/d/1z02J-BYqB1Sik2DMQ76W1CBxrUixehU5/view?usp=sharing" download rel="noopener noreferrer" target="_blank" className="download-icon">
                    <FiDownload size={22} />
                </a>
            </div>
        </div>
    )
}

export default Eskapad;