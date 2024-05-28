import React, { useState } from 'react';
import swimInstructorImg from '../swim-instructor.JPEG';
import customBikeImg from '../custom-bike.JPEG';
import spaceProgImg from '../space-prog.png';

const Contact = () => {
  const [showImage, setShowImage] = useState(null);

  const handleMouseEnter = (interest) => {
    setShowImage(interest);
  };

  const handleMouseLeave = () => {
    setShowImage(null);
  };

  return (
    <section className="interests" id="interests" onMouseLeave={handleMouseLeave}>
      <div className="heading">
        <h2>Interests</h2>
        <span>Some cool facts about me</span>
      </div>
      <div className="interests-container">
        <div
          className="interests-box"
          onMouseEnter={() => handleMouseEnter('volunteerWork')}
          onMouseLeave={handleMouseLeave}
        >
          <i className="bx bx-swim"></i>
          <h3>Volunteer Work</h3>
          <p>Swim Instructor</p>
          <p>Taught swimming lessons to children aged 5-12</p>
          <p>Promoted water safety and confidence in the pool</p>
        </div>
        {showImage === 'volunteerWork' && (
          <img
            src={swimInstructorImg}
            alt="Swim Instructor"
            className="hover-image"
          />
        )}
        <div
          className="interests-box"
          onMouseEnter={() => handleMouseEnter('customBikes')}
          onMouseLeave={handleMouseLeave}
        >
          <i className="bx bx-bicycle"></i>
          <h3>Building Custom Bikes</h3>
          <p>Restore and bring back to life cycles from the 1950s</p>
          <p>Passion for vintage cycles and their history</p>
        </div>
        {showImage === 'customBikes' && (
          <img
            src={customBikeImg}
            alt="Custom Bike"
            className="hover-image"
          />
        )}
        <div
          className="interests-box"
          onMouseEnter={() => handleMouseEnter('spaceProgram')}
          onMouseLeave={handleMouseLeave}
        >
          <i className="bx bx-rocket"></i>
          <h3>Highlander Space Program</h3>
          <p>Part of the Highlander Space Program at UCR</p>
          <p>Specializing in the fluid systems of the rocket</p>
        </div>
        {showImage === 'spaceProgram' && (
          <img
            src={spaceProgImg}
            alt="Space Program"
            className="hover-image"
          />
        )}
      </div>
    </section>
  );
};

export default Contact;