import React, { useEffect, useState } from 'react';

function Navigation(props) {
  const categories = [
    {name: 'About Me'},
    {name: 'Projects'},
    {name: 'Resume'},
    // {name: 'Contact'}
  ];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const {
    setAboutSelected,
    setProjectSelected,
    setResumeSelected,
    setContactSelected
  } = props;

  const categorySelected = (name) => {
    if (name === 'About Me') {
      setAboutSelected(true)
      setProjectSelected(false)
      setResumeSelected(false)
      setContactSelected(false)
    } else if (name === 'Projects') {
      setAboutSelected(false)
      setProjectSelected(true)
      setResumeSelected(false)
      setContactSelected(false)
    } else if (name === 'Resume') {
      setAboutSelected(false)
      setProjectSelected(false)
      setResumeSelected(true)
      setContactSelected(false)
    } 
    // else if (name === 'Contact') {
    //   setAboutSelected(false)
    //   setProjectSelected(false)
    //   setContactSelected(false)
    //   setContactSelected(true)
    // }
  };

  useEffect(() => {
    document.title = 'J Michael Smith - ' + currentCategory.name;
  }, [currentCategory]);

  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category.name} onClick={() => {
            categorySelected(category.name)
            setCurrentCategory(category)
          }} className={currentCategory.name === category.name && 'navActive'}>
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;