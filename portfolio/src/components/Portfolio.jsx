import React from 'react';
import Project from './Project';
import ecommerceImg from '../assets/ecommerce.jpg';
import employeeTrackerImg from '../assets/employeetracker.jpg';
import logoMakerImg from '../assets/logomaker.jpg';
import readmeImg from '../assets/readme.jpg';
import regexImg from '../assets/regex.jpg';
import textEditorImg from '../assets/text-editor.jpg';


function Portfolio() {
  const projects = [
    {
      title: "Text Editor",
      image: textEditorImg,
      description: "This is a project where I created a text editor that runs in the browser.",
      url: "", 
      repo: "https://github.com/jteleha/Text-Editor"
    },
    {
      title: "E-commerce Back End",
      image: ecommerceImg,
      description: "This is a project where I built the back-end of an E-commerce website",
      url: "",
      repo: "https://github.com/jteleha/E-commerce-back-end"
    },
    {
      title: "Employee Tracker",
      image: employeeTrackerImg,
      description: "This is a project where I created a command-line app to manage a company database.",
      url: "",
      repo: "https://github.com/jteleha/employee-tracker"
    },
    {
      title: "Regex Tutorial",
      image: regexImg,
      description: "This is a project where I did research on a regex expression.",
      url: "",
      repo: "https://github.com/jteleha/regex-tutorial"
    },
    {
      title: "Logo Maker",
      image: logoMakerImg,
      description: "This is a project where I built a Node.js command line app that generates a logo.",
      url: "",
      repo: "https://github.com/jteleha/Logo-Maker-"
    },
    {
      title: "README Generator",
      image: readmeImg,
      description: "This is a project where I built a command line app that allows the user to create a professional README.",
      url: "",
      repo: "https://github.com/jteleha/README-Generator"
    }
  ];

  return (
    <section>
      <h1>Portfolio</h1>
      <div className="project-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;