import React from 'react';
import Konami from 'react-konami';
import goatSound from '../assets/audio/goat.mp3';

const playEasterEggSound = () => {
  console.log('meeh meeh');

  const audio = new Audio();

  audio.src = goatSound;
  audio.play();
}

const EasterEgg = () => (
  <Konami easterEgg={playEasterEggSound} />
);

export default EasterEgg;
