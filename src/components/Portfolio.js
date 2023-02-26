import React, { useState, useEffect } from 'react';


export const PortfolioComponent = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('https://api.github.com/users/Engwalls/repos');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Laddar in projekt från GitHub...</p>;
  }

  return (
    <div className='portfolio-style'>
      <h1>Mina GitHub-projekt</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}