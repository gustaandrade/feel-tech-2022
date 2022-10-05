import React, { useState, useEffect } from 'react';

import Char from '../Char';

import './style.css';

const Body = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_HP_API_URL)
      .then(res => res.json())
      .then(data => {
        setCharacters(data);
      });
  }, []);

  const handleClick = () => {
    setCharacters(characters.filter(char => !char.wizard));
  };

  return (
    <div>
      <button className='button' onClick={handleClick}>
        Filter
      </button>

      <div className='container'>
        {characters.length > 0 &&
          characters.map((char, index) => <Char key={index} char={char} />)}
      </div>
    </div>
  );
};

export default Body;
