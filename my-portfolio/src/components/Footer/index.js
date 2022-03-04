import React from 'react';
import githubIcon from '../../assets/icons/github-48.png';
import linkedinIcon from '../../assets/icons/linkedin-48.png';
import twitterIcon from '../../assets/icons/twitter-48.png';
import wordpressIcon from '../../assets/icons/wordpress-48.png';
import facebookIcon from '../../assets/icons/facebook-48.png';
import youtubeIcon from '../../assets/icons/youtube-48.png';

function Footer() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://github.com/theprattler" target='_blank'>
            <img src={githubIcon} alt='' />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/j-michael-smith-917230220/" target='_blank'>
            <img src={linkedinIcon} alt='' />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jmichaelsmith0" target='_blank'>
            <img src={twitterIcon} alt='' />
          </a>
        </li>
        <li>
          <a href='' target='_blank'>
            <img src={wordpressIcon} alt='' />
          </a>
        </li>
        <li>
          <a href='' target='_blank'>
            <img src={facebookIcon} alt='' />
          </a>
        </li>
        <li>
          <a href='' target='_blank'>
            <img src={youtubeIcon} alt='' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer;