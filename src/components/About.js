import React from 'react';
import hand from '../assets/hand.jpg';
import './About.css';

const About = () => {
  return (
    <section className="about-section position-relative" id="about">
      <div className="blob blob-left"></div>
      <div className="blob blob-yellow"></div>
      <div className="blob blob-bottom-left"></div>
      <div className="blob blob-bottom-right"></div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <img src={hand} alt="pointing hand" className="img-fluid hand-img" />
          </div>
          <div className="col-md-6 about-text">
            <h2><span className="about-title">T</span>his is it. 😉</h2>
            <hr className="divider" />
            <p>
              Anish Kr. Sinha is an Indian <b>UI/UX Designer & Front End Developer</b> with a passion for designing beautiful and functional user experiences...
            </p>
            <p>
              He holds a <b>bachelor degree in Computer Applications</b>. During his graduation...
            </p>
            <p>
              His interests, however, extend beyond the web and he loves helping people with branding and print design...
            </p>
            <p>
              When he’s not designing, he’s probably hanging out with his girlfriend, watching series...
            </p>
            <hr className="divider mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
