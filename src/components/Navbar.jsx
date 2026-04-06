// src/components/Navbar.jsx
import React from 'react';
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-pill">
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Skills">Skills</a>
        <a href="#Contact">Contact</a>
      </div>
    </div>
  );
}