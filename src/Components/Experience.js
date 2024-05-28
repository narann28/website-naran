import React from 'react';
import ucr from "../ucr1.jpg"
import deanza from "../deanza.png"
import salesforce from "../salesforce.jpg"
import soil from "../soil.PNG"
const Experience = () => {
  return (
    <section className="services" id="experience">
      <div className="heading">
        <h2>Education and Experience</h2>
      </div>
      <div className="services-container">
        <div className="education">
          <h3>Education</h3>
          <div className="services-box">
            <img src={ucr} alt="UCR Icon" className="education-icon" style={{ width: '40px', height: '40px' }}/>
            <div className="education-details">
              <h4>Bachelor's Degree</h4>
              <p>University of California, Riverside</p>
              <p>Computer Science with Business Applications</p>
              <p>Graduation Year: 2024</p>
            </div>
          </div>
          <div className="services-box">
            <img src={deanza} alt="De Anza Icon" className="education-icon" style={{ width: '70px', height: '70px' }}/>
            <div className="education-details">
              <h4>Associate's Degree</h4>
              <p>De Anza College</p>
              <p>Computer Science</p>
              <p>Graduation Year: 2022</p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h3>Experience</h3>
          <div className="services-box">
          <img src={salesforce} alt="De Anza Icon" className="education-icon" style={{ width: '80px', height: '50px' }}/>
            <h4>Salesforce Admin Intern</h4>
            <p>Worked on the business process by creating user stories and acceptance criterias and moved on to development by working on transferring data over the salesforce and some development through flows and formula fields. </p>
            <a href="https://github.com/pgonzaleznetwork/forcemula">Github Link</a>
          </div>
          <div className="services-box">
          <img src={soil} alt="De Anza Icon" className="education-icon" style={{ width: '80px', height: '50px' }}/>
            <h4>Gardners Tool</h4>
            <p>Personal project with built in kit with sensors to track plant vitals such as 
the moisture content in the soil
and sunlight intensity
 </p>
            <a href="https://github.com/narann28/SoilHashout">Github Link</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;