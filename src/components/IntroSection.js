import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const IntroSection = () => (
  <section id="intro" className="intro-section">
    <div className="container-lg">
      <div className="row g-4 justify-content-center align-items-center">
        <div className="col-md-5 text-center text-md-start">
          <div className="custom-section d-flex align-items-center justify-content-center mb-4">
            <div className="custom-badge">New</div>
            <div className="custom-text">Stay connected to the upcoming & Recent jobs</div>
          </div>
          <h1 className="display-6">Your Solution Legal Consultancy</h1>
          <p className="lead my-4">We are here to help you take care of your legality with the best service especially for
            you.</p>
          <a href="#" className="btn btn-secondary btn-lg">GET STARTED</a>
          <p className="trusted-companies">Trusted by 10+ companies in Indonesia</p>
          <div className="company-logos">
            <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
              <img src="Assets/Airbnb Logo.png" alt="airbnb" />
            </a>
            <a href="https://Hubspot.com" target="_blank" rel="noopener noreferrer">
              <img src="Assets/Hub.png" alt="Hubspot" />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <img src="Assets/Google.png" alt="google" />
            </a>
            <a href="https://Microsoft.com" target="_blank" rel="noopener noreferrer">
              <img src="Assets/Mic.png" alt="Microsoft" />
            </a>
          </div>
        </div>
        <div className="col-md-5 text-center">
          <span className="tt" data-bs-placement="bottom">
            <img src="Assets/HeroImage.png" className="img-fluid" alt="hero Image" />
          </span>
          <div className="consultant-bar">
            <h5>Tiara Andini</h5>
            <p>~ Lawyer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
