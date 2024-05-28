import React from 'react';
import naranImgNew from '../naranimg.png';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
      </div>
      <div className="about-container">
        <div className="about-img">
          <img className="hero" src={naranImgNew} alt="" />
        </div>
        <div className="about-text">
          <p>
          I'm Naran Nathan, a dedicated full-stack web developer passionate about creating engaging digital experiences. With a solid foundation in front-end technologies, I blend creativity and technical expertise. Motivated by curiosity, I strive to deepen my insights into web development, consistently expanding my knowledge.

My experience includes working as a Salesforce Admin Intern for a small consulting company, providing business analysis and technical Salesforce support to three different clients. I collaborated with an offshore India team to delegate tasks and teach basic Salesforce sandbox skills. I've successfully completed two end-to-end projects in an agile environment, where I contributed to the business process by creating user stories and acceptance criteria, then moved on to development by transferring data over Salesforce and developing flows and formula fields. Additionally, I have worked on test scripts and user acceptance testing in ALM, ensuring the solutions meet business stakeholders' needs.

          </p>
          <div className="information">
            <div className="info-box">
              <i className="bx bxs-user"></i>
              <span>Naran Nathan</span>
            </div>
            <div className="info-box">
              <i className="bx bxs-phone-call"></i>
              <span>408-663-3408</span>
            </div>
            <div className="info-box">
              <i className="bx bxl-gmail"></i>
              <span>nnath003@ucr.edu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;