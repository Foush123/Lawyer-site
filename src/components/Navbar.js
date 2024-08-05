import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure you import the JS bundle for Bootstrap
import '../styles.css'; // Make sure this path is correct
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="Assets/Logo.png" alt="Logo" width="36px" height="36px" className="d-inline-block align-top" />
        LAWLIET
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">CONTACT</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">DASHBOARD</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Testimonials">TESTIMONIALS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Terms">TERMS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-search"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
