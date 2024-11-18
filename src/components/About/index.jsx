import React from "react";
import { skills } from "../../data";

const About = () => {
  return (
    <div className="about-section py-5" style={{ background: "#fff" }}>
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a passionate Full Stack Developer with a strong foundation in
          frontend and backend technologies. I have worked on several projects,
          including e-commerce platforms, portfolio websites, and web
          applications. I thrive in environments that challenge me to learn and
          grow.
        </p>
        <h3 className="mt-5">Skills</h3>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="p-3 border rounded text-center">{skill}</div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <a
            href="https://yashwanthvalusa.tiiny.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary me-3"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
