import React from 'react';
import avatar from '../assets/avatar.jpg';

function About() {
  return (
    <section>
      <h1>About Me</h1>
      <img src={avatar} alt="Profile Avatar" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
      <p>Hello! My name is Joel and I am currently studying to become a software developer. When I am not working on code, I enjoy watching sports, playing video games, and hanging out with my family.</p>
    </section>
  );
}

export default About;