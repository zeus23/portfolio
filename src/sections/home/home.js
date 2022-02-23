import React from "react";
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <span>Hi, my name is</span>
                <h1>Zohaib Kibria.</h1>
                <h2>I build things for web & mobile.</h2>
                <p>I’m a software engineer specializing in building (and occasionally designing)<br />
                    exceptional digital experiences. Currently, I’m focused on building accessible,<br />
                    human-centered products at Augend Tech.</p>
                <a href="#Contact">
                    <div className="connect-btn">
                        <span>Connect</span>
                    </div>
                </a>

            </div>
            <div className="bg-animate">
                <div className="animate-container">
                    <BackgroundAnimation />
                </div>
            </div>

        </div>
    )
}

export default Home;