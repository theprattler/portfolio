import React from 'react';

function Project() {
  const projectArr = [
    {
      alt: 'talkie-box ',
      text: 'MERN Stack',
      href: 'https://protected-forest-66303.herokuapp.com/',
      githubText: ' GitHub Repo',
      githubLink: 'https://github.com/wcastellan/talkie-box'
    },
    {
      alt: 'LyricLover ',
      text: 'JavaScript | CSS (Bulma) | Third Party APIs',
      href: 'https://osamadahnoun.github.io/LyricLover/',
      githubText: ' GitHub Repo',
      githubLink: 'https://github.com/Osamadahnoun/LyricLover'
    },
    {
      alt: 'Your Weather Dashboard ',
      text: 'JavaScript | CSS (Vanilla) | OpenWeatherMap API',
      href: 'https://theprattler.github.io/six-slaundering-salamanders/',
      githubText: ' GitHub Repo',
      githubLink: 'https://github.com/theprattler/six-slaundering-salamanders'
    },
    {
      alt: 'Professional CLI README Generator ',
      text: 'JavaScript | Inquirer',
      githubText: ' GitHub Repo',
      githubLink: 'https://github.com/theprattler/nine-nosy-neighbors'
    }
  ]
  return (
    <section className='projectsContainer'>
      {projectArr.map((project, i) => (
        <div className='projectContainer'>
          <img src={require(`../../assets/images/${i}.png`)} className='projectPic' title={project.alt} alt={project.alt} />
          <div>
            <span
              className='projectSpan'
              title='Deployed App'
              onClick={() => window.open(`${project.href}`)}
            >
              {project.alt}
            </span>
            |
            <span
              className='projectSpan'
              title='GitHub Repository'
              onClick={() => window.open(`${project.githubLink}`)}
            >
              {project.githubText}
            </span>
            <p className='projectTools'>{project.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Project;