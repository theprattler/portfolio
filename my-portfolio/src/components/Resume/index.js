import React from 'react';
// import resume from '../../assets/images';

function Resume() {
  const frontendArr = [
    'HTML',
    'CSS',
    'JavaScript',
    'Web APIs',
    'jQuery',
    'Bootstrap',
    'Server-Side APIs',
    'React'
  ];

  const backendArr = [
    'Node.js',
    'Object-Oriented Programming',
    'Express.js',
    'MySQL',
    'Model-View-Controller',
    'NoSQL (Mongoose/MongoDB)',
    'Progressive Web Applications',
    'REST'
  ]
  return (
    <section>
      <h2 id="resume">Resume and Proficiencies</h2>
      <div>
        <h3>Resume</h3>
        <p>
          A copy of my resume can be found <a href='' download>here.</a>
        </p>
      </div>
      <div>
        <h3>Front-end Development Proficiencies</h3>
        <ul>
          {frontendArr.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Back-end Development Proficiencies</h3>
        <ul>
          {backendArr.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Resume;