import React, { useEffect } from "react";
import './about.css';

import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';

import tech_logo from '../../assets/html.png'

import { BiRightArrow } from 'react-icons/bi'

const About = () => {
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, []);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            document.getElementById('console').innerHTML = "> Hello World!";
            var element = document.getElementById('example');
            element.classList.add('animate');
        }
    }

    const handleAnimate = () => {
        document.getElementById('console').innerHTML = "> Hello World!";
        var element = document.getElementById('example');
        element.classList.add('animate');
    }

    return (
        <div className="about-container">
            <div className="about-head">
                <span>01.</span>
                <h1>About Me</h1>
                <div className="line"></div>
            </div>

            {/* about content */}
            <div className="about-content">
                <div className="about-paragraph">
                    <p>Hello! My name is Zohaib and I enjoy creating things that live on the web and mobile. I'm a self taught developer and my interest in web development started back in 2017 when I started learning HTML & CSS.</p>

                    <p>Fast-forward to today, I'm working at a start-up which provides web development and mobile app development solutions to clients from different domains. My main focus is to build accessible, inclusive products and digital experiences for a variety of clients.</p>

                    <p>I have also been a part of remote team in France and Oman as a front-end developer.</p>
                </div>

                <div className="about-techstack">
                    <div className="tech-frame">
                        <div className="tech-terminal" id="example">
                            <div className="terminal-head">
                                <div className="circle one"></div>
                                <div className="circle two"></div>
                                <div className="circle three"></div>
                            </div>
                            <div className="terminal-body">
                                <span>{'<Javascript/>'}</span><br />
                                <span>
                                    <Typewriter
                                        words={["console.log('Hello World!');"]}
                                        loop={1}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    /></span><br />
                                <span id="console"></span><br />
                                <span>
                                    <Typewriter
                                        words={["var element = document.getElementById('example');"]}
                                        loop={0}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    /></span><br />
                                <span>
                                    <Typewriter
                                        words={["element.classList.add('animate');"]}
                                        loop={0}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    /></span><br />

                                <span>press enter to run above code</span><br />

                                <button onClick={handleAnimate}>enter</button>

                                <span style={{ color: '#a1a1a1' }}>$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="technology-content">
                <div className="technology-head">
                    <img src={tech_logo} alt="tech_logo" />
                    <h1>Technologies I've been working with</h1>
                </div>
                <div className="technology-body">
                    <ul>
                        <li>
                            <BiRightArrow size={12} />
                            <span>HTML & CSS</span>
                        </li>
                        <li>
                            <BiRightArrow size={12} />
                            <span>Javascript</span>
                        </li>
                        <li>
                            <BiRightArrow size={12} />
                            <span>React</span>
                        </li>
                        <li>
                            <BiRightArrow size={12} />
                            <span>React Native</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <BiRightArrow size={12} />
                            <span>Node.js</span>
                        </li>
                        <li>
                            <BiRightArrow size={12} />
                            <span>Express.js</span>
                        </li>
                        <li>
                            <BiRightArrow size={12} />
                            <span>Firebase</span>
                        </li>
                        <li>
                            <BiRightArrow size={12} />
                            <span>AWS</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <BiRightArrow size={12} />
                            <span>Redux</span>
                        </li>
                        <li>
                            <BiRightArrow size={12} />
                            <span>Figma</span>
                        </li>
                        <li>
                            <BiRightArrow size={12} />
                            <span>Adobe XD</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;