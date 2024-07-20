// src/components/Project.jsx
const Project = ({ title, image, appLink, repoLink }) => (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <a href={appLink} target="_blank" rel="noopener noreferrer">View App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">View Code</a>
    </div>
  );
  
  export default Project;
  