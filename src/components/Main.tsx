import React from "react";
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.jpg';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <h1>Swati Chaudhari</h1>
          <p>MS in Computer Software Engineering</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
