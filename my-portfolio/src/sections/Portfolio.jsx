// src/sections/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';
import bluePainting from './bluepainting_by_me.png'; // Import the image

const projects = [
  { title: 'Project 1', image: bluePainting, appLink: 'http://app1.com', repoLink: 'https://github.com/Mistaken40033' },
  // Add more projects
];

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </section>
);

export default Portfolio;
