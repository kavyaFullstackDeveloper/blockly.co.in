import React from 'react';
import profile from '../assets/profile.jpg';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section position-relative" id="home">
      <div className="home container d-flex flex-column flex-md-row align-items-center justify-content-between py-5">
        <div className="home-text">
          <div className="hello-bubble">Hello!</div>
          <h1>I’m <span className="highlight">Anish <span role="img" aria-label="wave">👋</span></span></h1>
          <p className="role">UI/UX Designer, Front-End Developer & Thinker</p>
          <p className="location">Based in India.</p>
          <div className="buttons mt-3">
            <a href="/cv.pdf" className="btn btn-warning me-2 shadow">Download CV</a>
            <a href="#contact" className="btn btn-dark shadow">Get in Touch!</a>
          </div>
        </div>
        <div className="home-image position-relative mt-4 mt-md-0">
          <img src={profile} className="img-fluid profile-img" alt="Anish" />
          <div className="blob yellow-blob"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
