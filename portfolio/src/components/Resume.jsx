import React from 'react';

function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download="resume.pdf" className="resume-download">Download My Resume</a>
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>HTML & CSS</li>
      </ul>
    </section>
  );
}

export default Resume;