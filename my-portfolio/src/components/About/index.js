import React from 'react';
import aboutImage from '../../assets/images/test-two.jpg';

function About() {
  return (
    <section>
      <h1 id="about">A Little About Me</h1>
      <div>
        <img src={aboutImage} style={{ width: '20%' }} alt='black and white photo of J Michael Smith'></img>
      </div>
      <div>
        <p>
          After having spent more than two decades in Nashville, Tennessee's optical industry, and upon the advice from some friends and family, I decided to change routes and try my hand at web development. The delicate balance between artistry and logic that the industry demands appeals to me.
          <br></br>
          <br></br>
          I am currently enrolled in The Coding Bootcamp at UNC Chapel Hill to be a fullstack web developer. As I am delving into the fullstack experience, I am discovering that I am very drawn to the front-end in particular. The visual aspect of the design that the client interacts with is a natural outlet for my creative side.
          <br></br>
          <br></br>
          Loyalty is a large part of my makeup as demonstrated by the fact I spent over twenty years working as a lab technician at Milam Optical Lab in Nashville, Tennessee. I made the Dean's List the two semesters I spent at Toccoa Falls College as a Music Composition major, and was salutatorian of my high school class at Plainview High School in Nebraska.
          <br></br>
          <br></br>
          I have self-published the first book of a planned fantasy series called <a href='https://www.amazon.com/Children-Calm-J-Michael-Smith-ebook/dp/B01BWI5EUO/ref=sr_1_1?crid=2YV313LAZ4KLW&keywords=the+children+of+calm+j+michael+smith&qid=1645994225&sprefix=%2Caps%2C50&sr=8-1' target='_blank'>The Children of Calm</a>, and occassionaly upload songs I've written onto <a href='https://www.youtube.com/channel/UC3lxkRvIOZASJuvV5UQY9OQ' target='_blank'>my Youtube channel</a>.
          <br></br>
          <br></br>
          I currently reside in Clayton, North Carolina, with my wife and two children. If you get to know me at all, you will find I enjoy making music, writing fantasy novels, delving into certain video game franchises, and most importantly, spending time with my family.
        </p>
      </div>
    </section>
  )
}

export default About;