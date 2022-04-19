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
      text: 'HTML | CSS (Bulma) | JavaScript',
      href: 'https://osamadahnoun.github.io/LyricLover/',
      githubText: ' GitHub Repo',
      githubLink: 'https://github.com/Osamadahnoun/LyricLover'
    },
    {
      alt: 'Your Weather Dashboard ',
      text: 'JavaScript | OpenWeatherMap API',
      href: 'https://theprattler.github.io/six-slaundering-salamanders/',
      githubText: ' GitHub Repo',
      githubLink: 'https://github.com/theprattler/six-slaundering-salamanders'
    },
    {
      alt: 'Professional README Generator ',
      text: 'JavaScript | Inquirer',
      githubText: ' GitHub Repo',
      githubLink: 'https://github.com/theprattler/nine-nosy-neighbors'
    }
  ]
  return (
    <section>
      {projectArr.map((project, i) => (
        <div>
          <img src={require(`../../assets/images/${i}.png`)} alt={project.alt} />
          <div>
            <span
              onClick={() => window.open(`${project.href}`)}
            >
              {project.alt}
            </span>
            |
            <span
              onClick={() => window.open(`${project.githubLink}`)}
            >
              {project.githubText}
            </span>
            <p>{project.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Project;