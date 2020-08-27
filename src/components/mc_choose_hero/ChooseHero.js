import React from 'react';
import images from '../assets/images.json';
import styles from './ChooseHero.module.css';

console.log(images);

const ChooseHero = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>SELECT YOUR FIGHTER</h1>
    <ul className={styles.fighters}>
      {images.map((img) => (
        <li key={img.id} className={styles.fighter}>
          <img src={img.avatar} alt={img.name}></img>
        </li>
      ))}
      <img src={images[0].gif} className={styles.gif}></img>
    </ul>
  </div>
);

export default ChooseHero;
