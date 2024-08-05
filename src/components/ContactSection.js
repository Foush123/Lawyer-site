import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; // Make sure this path is correct

const ContactSection = () => (
  <section id="Contact" className="fifth-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h2>Complex Questions?</h2>
          <p>Request for a personalized budget for your legal problem. We will send you a couple options in 24 hours. You can have a free consult, if our first customer.</p>
          <a href="#" className="btn btn-secondary btn-lg mb-5">
            <img src="/Assets/call.png" alt="call now" style={{ width: '28.56px', height: '32px', marginRight: '10px' }} />
            Call now
          </a>
        </div>
        <div className="col">
          <img src="/Assets/questions.png" className="img-fluid" alt="calling person" style={{ borderRadius: '0px 0px 0px 40px' }} />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
