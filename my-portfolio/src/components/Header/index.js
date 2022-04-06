import React, { useState } from 'react';
import Navigation from '../Navigation';

function Header(props) {
  const {
    setAboutSelected,
    setProjectSelected,
    setResumeSelected,
    setContactSelected
  } = props;

  return (
    <header>
      <h1>J Michael Smith</h1>
      <Navigation
        setAboutSelected={setAboutSelected}
        setProjectSelected={setProjectSelected}
        setResumeSelected={setResumeSelected}
        setContactSelected={setContactSelected}
      />
    </header>
  )
}

export default Header;