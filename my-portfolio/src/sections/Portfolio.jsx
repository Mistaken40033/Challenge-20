// src/sections/Portfolio.jsx
import React from 'react';
import Project from '../components/Project';
import bluePainting from './bluepainting_by_me.png'; // Import the image
import Raccoon from './Raccoon.png';

const projects = [
  { title: 'Blog Beats Teamwork', image: bluePainting, repoLink: 'https://github.com/Mistaken40033/blog-beats.git' },
  // Add more projectst
  { title: 'Team Resource Rascals', image: Raccoon, repoLink: 'https://github.com/Mistaken40033/team_resource_rascals.git' },
];

const Portfolio = () => (
  <section>
    <div className="portfolio-content">
    <h2>Portfolio</h2>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
    </div>
  </section>
);

export default Portfolio;
