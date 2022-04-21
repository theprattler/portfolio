import React, { useState } from 'react';
import Navigation from '../Navigation';

function Header(props) {
  const {
    setAboutSelected,
    setProjectSelected,
    setResumeSelected,
    //setContactSelected
  } = props;

  return (
    <header>
      <div>
        <h1>J Michael Smith</h1>
      </div>
      <div>
        <Navigation
          setAboutSelected={setAboutSelected}
          setProjectSelected={setProjectSelected}
          setResumeSelected={setResumeSelected}
          //setContactSelected={setContactSelected}
        />
      </div>
    </header>
  )
}

export default Header;