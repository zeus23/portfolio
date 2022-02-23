import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import EmailBar from './components/emailBar/emailBar';
import Navbar from './components/navbar/navbar';
import SocialIcons from './components/socialIcons/socialIcons';
import About from './sections/about/about';
import Home from './sections/home/home';
import Experience from './sections/experience/experience';
import Work from './sections/work/work';
import Contact from './sections/contact/contact';
import Aos from 'aos';
import "aos/dist/aos.css";

export const MenuContext = createContext(null);

function App() {
	const [section, setSection] = useState(0);

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className="App">
			{/* Top Navbar */}
			<MenuContext.Provider value={{ section, setSection }}>
				<Navbar />
			</MenuContext.Provider>

			{/* Main section inlcuding left social icons , middle part with dynamic contents and right will be email */}
			<div className='main-container'>
				<SocialIcons />
				<div className='middle-container' >
					<div id="Home" data-aos="fade-up">
						<Home />
					</div>
					<div id="About">
						<About />
					</div>
					<div id="Experience">
						<Experience />
					</div>
					<div id="Work">
						<Work />
					</div>
					<div id="Contact">
						<Contact />
					</div>
				</div>
				<EmailBar />
			</div>

		</div>
	);
}

export default App;
