import React from "react";
import './work.css';
import Eskapad from "../../projects/eskapad";
import Echo from "../../projects/echo";
import TeamMate from "../../projects/teammate";
import CryptoFox from "../../projects/cryptofox";
const Work = () => {

    const handleMouseOver = (e) => {
        console.log(e)
        document.getElementById('image').classList.add('removeFilter');
        document.getElementById('overlay').classList.add('remove');

    }

    const handleMouseOut = () => {
        console.log("out")
        document.getElementById('image').classList.remove('removeFilter');
        document.getElementById('overlay').classList.remove('remove');
    }

    return (
        <div className="work-container">
            <div className="work-head">
                <span>04.</span>
                <h1>Some Things I've Built</h1>
                <div className="line"></div>
            </div>

            <div className="work-body">
                {/* Eskapad */}
                <Eskapad />
                <Echo />
                <CryptoFox />
                <TeamMate />
            </div>

        </div>
    )
}

export default Work;