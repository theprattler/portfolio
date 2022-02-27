import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Project></Project>
        <Resume></Resume>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;