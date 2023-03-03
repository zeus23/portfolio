import React, { useEffect } from "react";
import './featured.css';

import featuredImg from '../../assets/featured.jpg';

const Featured = () => {
    const handleMouseOver = (e) => {
        console.log(e)
        document.getElementById('lomads-image').classList.add('removeFilter');
        document.getElementById('lomads-overlay').classList.add('remove');

    }

    const handleMouseOut = () => {
        console.log("out")
        document.getElementById('lomads-image').classList.remove('removeFilter');
        document.getElementById('lomads-overlay').classList.remove('remove');
    }

    return (
        <div className="featured-container">
            <div className="featured-head">
                <span>03.</span>
                <h1>Featured</h1>
                <div className="line"></div>
            </div>

            {/* about content */}
            <div className="featured-content">
                <div className="featured-image" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <img src={featuredImg} alt="eskapad_img" id="lomads-image" />
                    <div className="overlayDiv" id="lomads-overlay"></div>
                </div>
                <div className="featured-paragraph">
                    <p>Lomads is the ultimate opeartions and finance management dashboard for web3 organizations, DAOs and beyond. You can now launch soulbound token for the members of your organisation. The unique soulbound token for each member performs key roles like personalizing the information they see on the dashboard based on their unique needs, it automates your members access within the platform and across various third party tools and it records the contribution of members while giving them ownership of their data.</p>
                    <p>The platform is built using best in class components like gnosis safe, IPFS and polygon network.</p>
                    <a href="https://www.lomads.xyz/" target={"_blank"}>Visit lomads at https://www.lomads.xyz/</a>
                </div>
            </div>
        </div>
    )
}

export default Featured;