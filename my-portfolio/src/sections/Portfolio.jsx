// src/sections/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';
import bluePainting from './bluepainting_by_me.png'; // Import the image
import Raccoon from './Raccoon.png';

const projects = [
  { title: 'Project 1', image: bluePainting, appLink: '', repoLink: 'git@github.com:Mistaken40033/Challenge-19.git' },
  // Add more projects
  { title: 'Project 1', image: Raccoon, appLink: '', repoLink: 'git@github.com:Mistaken40033/blog-beats.git' },
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
