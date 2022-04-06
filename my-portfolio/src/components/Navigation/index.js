import React, { useEffect, useState } from 'react';

function Navigation(props) {
  // const {
  //   categories = [],
  //   setCurrentCategory,
  //   currentCategory
  // } = props;

  const categories = [
    {name: 'About Me'},
    {name: 'Portfolio'},
    {name: 'Resume'},
    {name: 'Contact'}
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
    } else if (name === 'Portfolio') {
      setProjectSelected(true)
      setAboutSelected(false)
      setResumeSelected(false)
      setContactSelected(false)
    } else if (name === 'Resume') {
      setResumeSelected(true)
      setAboutSelected(false)
      setProjectSelected(false)
      setContactSelected(false)
    } else if (name === 'Contact') {
      setContactSelected(true)
      setAboutSelected(false)
      setProjectSelected(false)
      setContactSelected(false)
    }
  }

  useEffect(() => {
    document.title = 'J Michael Smith - ' + currentCategory.name;
  }, [currentCategory]);

  return (
    <nav>
      <ul>
        {/* {categories.map((category) => (
          <li
            className={`${
              currentCategory.name === category.name && 'navActive'
              }`}
            key={category.name}
          >
            <span
              onClick={() => {
                categorySelected(category.name)
                setCurrentCategory(category)
              }}
            >
            </span>
          </li>
        ))} */}
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