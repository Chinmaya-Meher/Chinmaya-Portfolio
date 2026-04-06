import '../css/Hero.css';
import { Spotlight } from "./ui/Spotlight";

export default function Hero() {
  return (
    <div className="hero-container">

      {/* 🔥 GRID BACKGROUND */}
      <div className="grid-bg" />

      {/* 🔥 FADE OVERLAY */}
      <div className="grid-fade" />

      {/* 🔥 SPOTLIGHTS */}
      <Spotlight className="spotlight-1 !w-auto !h-auto !opacity-100"  fill="#7c3aed" />
      <Spotlight className="spotlight-2 !w-auto !h-auto !opacity-100" fill="#3b82f6" />
      
      

      {/* 🔥 CONTENT */}
      <div className="hero-wrapper">
        <p className='hero-txt1'>Hello I'm</p>
        <p className='hero-txt2'>CHINMAYA MEHER</p>
        <p className='hero-txt3'>FULL-STACK DEVELOPER & CREATIVE BUILDER</p>
        <p className='hero-txt4'>
          Building scalable web applications and crafting modern digital experiences <br />
          with clean design and powerful functionality.
        </p>

        <div className="buttons">
          <button className="btn-primary">View Work</button>
          <button className="btn-secondary">Resume</button>
        </div>
      </div>

    </div>
  );
}