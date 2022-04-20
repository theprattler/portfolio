import React from 'react';
import resume from '../../assets/images/resume-pdf.pdf';

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
  ];

  return (
    <section className='sectionContainer'>
      <h2 id="resume">Resume and Proficiencies</h2>
      <div className='resumeContainer'>
        <h3>Resume</h3>
        <p>
          <a href={resume} className='resumeDownload' download>
            Download my resume.
          </a>
        </p>
      </div>
      <div className='proficContainer'>
        <div>
          <h3>Front-end Development Proficiencies</h3>
          <ul>
            {frontendArr.map((name) => (
              <li className='proficText' key={name}>{name}</li>
            ))}
          </ul>
        </div>
        <div className='backendContainer'>
          <h3>Back-end Development Proficiencies</h3>
          <ul>
            {backendArr.map((name) => (
              <li className='proficText' key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Resume;