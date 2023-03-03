import React, { useState } from "react";
import './experience.css';

import { BiRightArrow } from 'react-icons/bi'

const tabOptions = ['Cloudbloom', 'Augend Tech', 'Flappify'];

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
                                <span>March 2022 - present</span>
                                <ul>
                                    <li>
                                        <div><BiRightArrow size={14} color="#64ffda" /></div>
                                        <p>Write modern, performant, maintainable code for a diverse array of client and internal projects</p>
                                    </li>
                                    <li>
                                        <div><BiRightArrow size={14} color="#64ffda" /></div>
                                        <p>Adjusted design parameters and co-ordinated with other engineers to boost
                                            performance and incorporate new features.</p>
                                    </li>
                                    <li>
                                        <div><BiRightArrow size={14} color="#64ffda" /></div>
                                        <p>Currently working with a france based web3 startup, Lomads. Working along side of CTO and fellow developers. Currently focusing on integrating github on their platform using github webhooks.</p>
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
                                <h1>Software Developer  </h1>
                                <span>March 2020 - February 2022</span>
                                <ul>
                                    <li>
                                        <div><BiRightArrow size={14} color="#64ffda" /></div>
                                        <p>Write modern, performant, maintainable code for a diverse array of client and internal projects</p>
                                    </li>
                                    <li>
                                        <div><BiRightArrow size={14} color="#64ffda" /></div>
                                        <p>Monitored ongoing operations of assigned programs and responded to
                                            problems by diagnosing and correcting logic and coding errors.</p>
                                    </li>
                                    <li>
                                        <div><BiRightArrow size={14} color="#64ffda" /></div>
                                        <p>Adjusted design parameters and co-ordinated with other engineers to boost
                                            performance and incorporate new features.</p>
                                    </li>
                                    <li>
                                        <div><BiRightArrow size={14} color="#64ffda" /></div>
                                        <p>Communicate with multi-disciplinary teams of engineers, designers and clients on a daily basis</p>
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
                                <h1>Frontend Developer  </h1>
                                <span>March 2019 - March 2020</span>
                                <ul>
                                    <li>
                                        <div><BiRightArrow size={14} color="#64ffda" /></div>
                                        <p>Managed full-cycle design tasks, handling phases from conception to
                                            completion while maintaining guidelines throughout.</p>
                                    </li>
                                    <li>
                                        <div><BiRightArrow size={14} color="#64ffda" /></div>
                                        <p>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</p>
                                    </li>
                                    <li>
                                        <div><BiRightArrow size={14} color="#64ffda" /></div>
                                        <p>Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript,React and Firebase.</p>
                                    </li>
                                    <li>
                                        <div><BiRightArrow size={14} color="#64ffda" /></div>
                                        <p>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
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