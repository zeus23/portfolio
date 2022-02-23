import React from "react";
import './socialIcons.css';

import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const SocialIcons = () => {
    return (
        <div className="social-container">
            <div className="social-icon">
                <a href="https://github.com/zeus23" target="_blank">
                    <span><FiGithub size={20} /></span>
                </a>
            </div>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/zohaib-kibria-221890137/" target="_blank">
                    <span><FiLinkedin size={20} /></span>
                </a>
            </div>
            <div className="social-icon">
                <a href="https://www.instagram.com/zohaibkibria/" target="_blank">
                    <span><BsInstagram size={20} /></span>
                </a>
            </div>
            <div className="v-line"></div>
        </div>
    )
}

export default SocialIcons;