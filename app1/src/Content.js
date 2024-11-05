import React from 'react';
import { useState } from 'react';

const Content = () => {
  const[name,setNames] = useState('Manjima');
    const handleNameChange = () => {
    const names = ['milk', 'bed', 'veg'];
    const int = Math.floor(Math.random() * 3);
    return setNames(names[int]);
  };

  const handleClick = () => {
    console.log('You Clicked');
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`); // Use backticks for string interpolation
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText); // Use backticks for string interpolation
  };

  return (
    <main>
      <p>
        Hello {name}
      </p>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={() => handleClick2('Akshay')}>Click here</button>
      <button onClick={(e) => handleClick3(e)}>Click here</button>
    </main>
  );
};

export default Content;

