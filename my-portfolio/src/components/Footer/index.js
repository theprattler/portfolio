import React from 'react';
import githubIcon from '../../assets/icons/github-48.png';
import linkedinIcon from '../../assets/icons/linkedin-48.png';
import twitterIcon from '../../assets/icons/twitter-48.png';

function Footer() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://github.com/theprattler">
            <img src={githubIcon} alt=''></img>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/j-michael-smith-917230220/">
            <img src={linkedinIcon} alt=''></img>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jmichaelsmith0">
            <img src={twitterIcon} alt=''></img>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer;