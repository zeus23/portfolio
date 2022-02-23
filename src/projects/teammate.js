import React from "react";

import { HiOutlineExternalLink } from 'react-icons/hi'
import teammate_img from '../assets/teamate_image.png'

const TeamMate = () => {
    const handleMouseOver = (e) => {
        console.log(e)
        document.getElementById('teammate_image').classList.add('removeFilter');
        document.getElementById('teammate_overlay').classList.add('remove');

    }

    const handleMouseOut = () => {
        console.log("out")
        document.getElementById('teammate_image').classList.remove('removeFilter');
        document.getElementById('teammate_overlay').classList.remove('remove');
    }
    return (
        <div className="work-project">
            <div className="project-img" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={teammate_img} alt="eskapad_img" id="teammate_image" />
                <div className="overlay" id="teammate_overlay"></div>
                <div className="project-desc-overlay">
                    <span>Personal Project</span>
                    <h1>TeamMate</h1>
                    <div className="project-desc">
                        <p>TeamMate is a collaboration tool that organizes your projects into boards. In one glance, TeamMate tells you what's being worked on, who's working on what, and where something is in a process. This project is inspired by Trello. You can start a board from available templates that best suits your requirements.</p>
                    </div>
                    <span>React Firebase HTML & CSS</span>
                    <a href="https://team-mate.netlify.app/" rel="noopener noreferrer" target="_blank" className="download-icon">
                        <HiOutlineExternalLink size={22} />
                    </a>
                </div>
            </div>
            <div className="project-content">
                <span>Personal Project</span>
                <h1>TeamMate</h1>
                <div className="project-desc">
                    <p>TeamMate is a collaboration tool that organizes your projects into boards. In one glance, TeamMate tells you what's being worked on, who's working on what, and where something is in a process. This project is inspired by Trello. You can start a board from available templates that best suits your requirements.
                        (Open in laptop or desktop)
                    </p>
                </div>
                <span>React Firebase HTML & CSS</span>
                <a href="https://team-mate.netlify.app/" rel="noopener noreferrer" target="_blank" className="download-icon">
                    <HiOutlineExternalLink size={22} />
                </a>
            </div>
        </div>
    )
}

export default TeamMate;