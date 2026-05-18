import { animals } from './animals';
import React from 'react';

const background = (
  <img
    className='background'
    alt='ocean'
    src='/images/ocean.jpg'
  />
);

const displayFact = (e) => {
  const clicked = e.target.alt;
  const randI = Math.floor(Math.random() * animals[clicked].facts.length);
  const funFact = animals[clicked].facts[randI]
  document.getElementById('fact').innerHTML = funFact;
}

const images = Object.keys(animals).map((animal) => (
  <img
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button'
    onClick={displayFact}
  />
));

const showBackground = true; 
//change to false to hide background

const title = Math.random() < 0.5 ? 'Animal Fun Facts' : '';

const App = () => {
  return (
    <div>
      <h1>
        {title || 'Click an animal for a fun fact'}
      </h1>
      {showBackground && background}
      <p id='fact'></p>
      <div className='animals'>
        {images}
      </div>
    </div>
  );
}

export default App




