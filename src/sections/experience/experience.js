import React, { useState } from "react";
import './experience.css';

import { BiRightArrow } from 'react-icons/bi'

const tabOptions = ['Augend Tech', 'Flappify', 'Trian Tech'];

const Experience = () => {

    const [tab, setTab] = useState(1);

    return (
        <div className="experience-container">
            <div className="experience-head">
                <span>02.</span>
                <h1>My Experience</h1>
                <div className="line"></div>
            </div>

            {/* experience content */}
            <div className="experience-content">
                <div className="experience-menubar">
                    {
                        tabOptions.map((option, index) => {
                            return (
                                <div className={tab === index + 1 ? "exp-menu active" : "exp-menu"} onClick={() => setTab(index + 1)}>
                                    <span>{option}</span>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    tab === 1
                        ?
                        <>
                            <div className="experience-body">
                                <h1>Software Developer  </h1>
                                <span>March 2020 - present</span>
                                <ul>
                                    <li>
                                        <BiRightArrow size={24} color="#64ffda" />
                                        <p>Write modern, performant, maintainable code for a diverse array of client and internal projects</p>
                                    </li>
                                    <li>
                                        <BiRightArrow size={24} color="#64ffda" />
                                        <p>Monitored ongoing operations of assigned programs and responded to
                                            problems by diagnosing and correcting logic and coding errors.</p>
                                    </li>
                                    <li>
                                        <BiRightArrow size={24} color="#64ffda" />
                                        <p>Adjusted design parameters and co-ordinated with other engineers to boost
                                            performance and incorporate new features.</p>
                                    </li>
                                    <li>
                                        <BiRightArrow size={24} color="#64ffda" />
                                        <p>Communicate with multi-disciplinary teams of engineers, designers and clients on a daily basis</p>
                                    </li>
                                </ul>
                            </div>
                        </>
                        :
                        null
                }

                {
                    tab === 2
                        ?
                        <>
                            <div className="experience-body">
                                <h1>Frontend Developer  </h1>
                                <span>March 2019 - March 2020</span>
                                <ul>
                                    <li>
                                        <BiRightArrow size={24} color="#64ffda" />
                                        <p>Managed full-cycle design tasks, handling phases from conception to
                                            completion while maintaining guidelines throughout.</p>
                                    </li>
                                    <li>
                                        <BiRightArrow size={24} color="#64ffda" />
                                        <p>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</p>
                                    </li>
                                    <li>
                                        <BiRightArrow size={24} color="#64ffda" />
                                        <p>Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript,React and Firebase.</p>
                                    </li>
                                    <li>
                                        <BiRightArrow size={24} color="#64ffda" />
                                        <p>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
                                    </li>
                                </ul>
                            </div>
                        </>
                        :
                        null
                }

                {
                    tab === 3
                        ?
                        <>
                            <div className="experience-body">
                                <h1>Full Stack Internship  </h1>
                                <span>November 2017 - October 2018</span>
                                <ul>
                                    <li>
                                        <BiRightArrow size={24} color="#64ffda" />
                                        <p>Worked with senior developers and designers to build inventory
                                            management system for a real estate construction firm using HTML, CSS, JavaScript and PHP.</p>
                                    </li>
                                    <li>
                                        <BiRightArrow size={24} color="#64ffda" />
                                        <p>Assisted with creating cross-platform UI web components and built small
                                            responsive applications as well as company internal website using front-end
                                            frameworks.</p>
                                    </li>
                                </ul>
                            </div>
                        </>
                        :
                        null
                }
            </div>

        </div>
    )
}

export default Experience;