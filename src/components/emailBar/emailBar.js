import React from "react";
import './emailBar.css';
import { FiMail } from 'react-icons/fi'

const EmailBar = () => {
    return (
        <div className="email-container">
            <div className="email-icon">
                <span><FiMail size={14} /></span>
                <span> zohaib8kibria@gmail.com</span>
            </div>
            <div className="v-line"></div>
        </div>
    )
}

export default EmailBar;