import React, { useContext } from "react";
import './navbar.css';

import profilePic from '../../assets/zohaib_nav_logo.png'

import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

import { MenuContext } from "../../App";


const menu = ["About", "Experience", "Work", "Contact"];

const Navbar = () => {
    const { section, setSection } = useContext(MenuContext);
    return (
        <div className="nav">
            {/* Logo */}
            <div className="nav-logo">
                <a href="#Home">
                    <img src={profilePic} alt="nav-img" />
                </a>
            </div>

            {/* Menu*/}
            <div className="nav-menu">
                {
                    menu.map((item, index) => {
                        return (
                            <a href={`#${item}`} className="menu-item" key={index} onClick={() => setSection(index + 1)}>
                                <span>0{index + 1}.</span>
                                <p className={section === index + 1 ? "active" : null}>{item}</p>
                            </a>
                        )
                    })
                }
                <a href="https://drive.google.com/file/d/1sVaO8v7eZn_dcuf6Ow_vVMJZwnEw8Jd6/view?usp=sharing" download target={'_blank'} rel="noopener noreferrer">
                    <div className="menu-item resume-btn">
                        <p>Resume</p>
                    </div>
                </a>
            </div>

            {/* Menu tab for mobile */}
            <div className="nav-mobile">
                <div className="nav-icon">
                    <a href="https://github.com/zeus23" target="_blank">
                        <BsGithub size={24} color="#ccd6f6" />
                    </a>
                </div>
                <div className="nav-icon">
                    <a href="https://www.linkedin.com/in/zohaib-kibria-221890137/" target="_blank">
                        <BsLinkedin size={24} color="#ccd6f6" />
                    </a>
                </div>
                <div className="nav-icon">
                    <a href="https://www.instagram.com/zohaibkibria/" target="_blank">
                        <BsInstagram size={24} color="#ccd6f6" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;