import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [projectSelected, setProjectSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div>
      <Header
        setAboutSelected={setAboutSelected}
        setProjectSelected={setProjectSelected}
        setResumeSelected={setResumeSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {aboutSelected && !projectSelected && !resumeSelected && !contactSelected ? (
          <About />
        ) : projectSelected && !aboutSelected && !resumeSelected && !contactSelected ? (
          <Gallery />
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