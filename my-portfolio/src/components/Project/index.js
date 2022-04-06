import React from 'react';

function Project(props) {
  const currentProject = {
    name: 'Your Weather Dashboard',
    description: 'JavaScript/OpenWeatherMap API'
  }
  return (
    <section>
      <h1>Projects</h1>
      <h3>{currentProject.name}</h3>
      <p>{currentProject.description}</p>
    </section>
  )
}

export default Project;