import React from 'react';

function Project() {
  const projectArr = [
    {
      alt:'talkie-box',
      text: 'MERN Stack',
      href: 'https://protected-forest-66303.herokuapp.com/',
      github: 'https://github.com/wcastellan/talkie-box'
    },
    {
      alt: 'LyricLover',
      text: 'HTML | CSS (Bulma) | JavaScript',
      href: 'https://osamadahnoun.github.io/LyricLover/',
      github: 'https://github.com/Osamadahnoun/LyricLover'
    },
    {
      alt: 'Your Weather Dashboard',
      text: 'JavaScript | OpenWeatherMap API',
      href: 'https://theprattler.github.io/six-slaundering-salamanders/',
      github: 'https://github.com/theprattler/six-slaundering-salamanders'
    },
    {
      alt: 'Professional README Generator',
      text: 'JavaScript | Inquirer',
      github: 'https://github.com/theprattler/nine-nosy-neighbors'
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
            <span
              onClick={() => window.open(`${project.github}`)}
            >
            </span>
            <p>{project.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Project;