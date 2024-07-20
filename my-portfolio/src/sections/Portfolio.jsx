// src/sections/Portfolio.jsx
import Project from '../components/Project';

const projects = [
  { title: 'Project 1', image: 'path-to-image1.jpg', appLink: 'http://app1.com', repoLink: 'http://github.com/repo1' },
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
