import React from "react";
import './contact.css';

const Contact = () => {

    return (
        <div className="contact-container">
            {/* contact content */}
            <div className="contact-content">
                <span>05. What's Next?</span>
                <h1>Get In Touch</h1>
                <p>Currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you!</p>
                <a href="mailto:zohaib8kibria@gmail.com" rel="noopener noreferrer" target={"_blank"}>
                    <button>Say Hello</button>
                </a>
            </div>
        </div>
    )
}

export default Contact;