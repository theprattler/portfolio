import React from 'react';
import aboutImage from '../../assets/images/test-two.jpg';

function About() {
  return (
    <section>
      <h1 id="about">A Little About Me</h1>
      <div>
        <img src={aboutImage} style={{ width: '20%' }} alt='black and white of J Michael Smith'></img>
      </div>
      <div>
        <p>
          I am a full-stack web developer utilizing a background in <a href='https://www.youtube.com/channel/UC3lxkRvIOZASJuvV5UQY9OQ' target='_blank' rel='noreferrer'>music</a> and <a href='https://www.amazon.com/Children-Calm-J-Michael-Smith-ebook/dp/B01BWI5EUO/ref=sr_1_1?crid=3AEFNJSEVCG8Z&keywords=the+children+of+calm+j+michael+smith&qid=1643567744&sprefix=the+children+of+calm+j+michael+smith%2Caps%2C86&sr=8-1' target='_blank' rel='noreferrer'>writing</a> to creatively build a user-enjoyed web experience. I received my certificate for completing <a href='https://bootcamp.unc.edu/coding/' target='_blank' rel='noreferrer'>The Coding Bootcamp at UNC Chapel Hill</a> in March 2022. Known as loyal and hard-working, I strive to create an experience that is both user-friendly and visually appealing for each project. It excites me to use my skills in a setting that values teamwork and quality output.
          <br></br>
          <br></br>
          I currently reside in Clayton, North Carolina, with my wife and two children.
        </p>
      </div>
    </section>
  )
}

export default About;