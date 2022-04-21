import React from 'react';
import aboutImage from '../../assets/images/test-two.jpg';

function About() {
  return (
    <section className='sectionContainer'>
      <h2>A Little About Me</h2>
      <div className='aboutContainer'>
        <div className='imageContainer'>
          <img src={aboutImage} className='profPic' alt='black and white of J Michael Smith'></img>
          <div className='profPicOverlay'>
            <div className='overlayText'>Peek-a-boo</div>
          </div>
        </div>
        <div>
          <p className='aboutText'>
            I am a full-stack web developer utilizing a background in <a href='https://www.youtube.com/channel/UC3lxkRvIOZASJuvV5UQY9OQ' target='_blank' rel='noreferrer'>music</a> and <a href='https://www.amazon.com/J-Michael-Smith/e/B01CFG6GZY?ref_=dbs_p_ebk_r00_abau_000000' target='_blank' rel='noreferrer'>writing</a> to creatively build a user-enjoyed web experience. I received my certificate for completing <a href='https://bootcamp.unc.edu/coding/' target='_blank' rel='noreferrer'>The Coding Bootcamp at UNC Chapel Hill</a> in March 2022. Known as loyal and hard-working, I strive to create an experience that is both user-friendly and visually appealing for each project. It excites me to use my skills in a setting that values teamwork and quality output.
            <br></br>
            <br></br>
            I currently reside in Clayton, North Carolina, with my wife and two children.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;