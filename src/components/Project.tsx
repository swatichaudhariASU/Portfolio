import React from "react";
import project1 from '../assets/images/wild-rydes-c.jpg';
import project2 from '../assets/images/credit-card-c.jpg';
import project3 from '../assets/images/household-utility-c.jpg';
import project4 from '../assets/images/react-redux-c.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%" /></a>
                <a href="" target="_blank" rel="noreferrer"><h2>E-Commerce Platform for Pet Services and Products</h2></a>
                <p>Developed a full-stack web platform offering pet products, grooming, and vet services with secure e-commerce features and personalized user recommendations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/swatichaudhariASU/project_JarvisAI" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="100%" /></a>
                <a href="https://github.com/swatichaudhariASU/project_JarvisAI" target="_blank" rel="noreferrer"><h2>SmartTalk – AI Voice Assistant</h2></a>
                <p>Built an AI-powered voice assistant with GPT integration for natural conversations, task automation, and voice interaction, enhancing user efficiency and experience.</p>
            </div>
            <div className="project">
                <a href="https://github.com/swatichaudhariASU/Project_video-chat-application" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="thumbnail" width="100%" /></a>
                <a href="https://github.com/swatichaudhariASU/Project_video-chat-application" target="_blank" rel="noreferrer"><h2>VidShare – Cross-Platform Video Sharing App</h2></a>
                <p>Developed a React Native mobile app with seamless video playback, upload, and search features, powered by Appwrite backend and designed for full cross-platform compatibility.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;