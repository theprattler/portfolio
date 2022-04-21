import React from 'react';
import githubIcon from '../../assets/icons/github-48.png';
import linkedinIcon from '../../assets/icons/linkedin-48.png';
import emailIcon from '../../assets/icons/email-48.png';

function Footer() {
  return (
    <footer>
      <div className='footLinkContainer'>
        <a href="https://github.com/theprattler" target='_blank' rel='noreferrer'>
          <img src={githubIcon} title='GitHub Profile' alt='link to github profile' />
        </a>
        <a href="https://www.linkedin.com/in/j-michael-smith-917230220/" target='_blank' rel='noreferrer'>
          <img src={linkedinIcon} title='LinkedIn Profile' alt='link to linkedin profile' />
        </a>
        <a href='mailto:jmichaelsmith.writer@gmail.com'>
          <img src={emailIcon} title='Contact Via Email' alt='contact via email' />
        </a>
      </div>
    </footer>
  )
}

export default Footer;