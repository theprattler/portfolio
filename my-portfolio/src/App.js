import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
//import Navigation from './components/Navigation';

function App() {
  
  const [aboutSelected, setAboutSelected] = useState(true);
  const [projectSelected, setProjectSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div>
      <Header
        
          // categories={categories}
          // setCurrentCategory={setCurrentCategory}
          // currentCategory={currentCategory}
          setAboutSelected={setAboutSelected}
          setProjectSelected={setProjectSelected}
          setResumeSelected={setResumeSelected}
          setContactSelected={setContactSelected}
        
      />
      <main>
        {/* <About currentCategory={currentCategory}></About>
        <Project></Project>
        <Resume></Resume>
        <Contact></Contact> */}
        {aboutSelected && !projectSelected && !resumeSelected && !contactSelected ? (
          <About />
        ) : projectSelected && !aboutSelected && !resumeSelected && !contactSelected ? (
          <Project />
        ) : resumeSelected && !aboutSelected && !projectSelected && !contactSelected ? (
          <Resume />
        ) : (
          <Contact />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;