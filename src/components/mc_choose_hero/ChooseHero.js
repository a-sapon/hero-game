import React, { useState, useEffect } from 'react';
import images from '../assets/images.json';
import styles from './ChooseHero.module.css';

const ChooseHero = () => {
  const [activeId, setActiveId] = useState(10);
  const currObj = images.find(item => item.id === String(activeId));

  useEffect(() => {
    const elWithActiveClass = document.querySelector(`.${styles.active}`);
    if (elWithActiveClass) elWithActiveClass.classList.remove(styles.active);
    const currentEl = document.getElementById(String(activeId));
    currentEl.classList.add(styles.active);
  }, [activeId]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyPressed);
    return () => {
      window.removeEventListener('keydown', onKeyPressed);
    };
  });

  function onKeyPressed(e) {
    const lastEl = +images[images.length - 1].id;
    const firstEl = +images[0].id;
    if (e.key === 'ArrowRight') {
      if (activeId === lastEl) {setActiveId(firstEl)}
      else if (activeId === 16) {setActiveId(20)}
      else if (activeId === 26) {setActiveId(31)}
      else if (activeId === 35) {setActiveId(41)}
      else {setActiveId((prev) => (prev += 1))}
    }
    if (e.key === 'ArrowLeft') {
      if (activeId === firstEl) {setActiveId(lastEl)}
      else if (activeId === 20 ) {setActiveId(16)}
      else if (activeId === 31) {setActiveId(26)}
      else if (activeId === 41) {setActiveId(35)}
      else {setActiveId((prev) => (prev -= 1))}
    }
    if (e.key === 'ArrowUp') {
      if (activeId < 20) {return}
      setActiveId((prev) => (prev -= 10));
    }
    if (e.key === 'ArrowDown') {
      if (activeId > 40 ) {return}
      else if (activeId === 20) {setActiveId((prev) => (prev += 1))}
      else if (activeId === 26) {setActiveId((prev) => (prev -= 1))}
      setActiveId((prev) => (prev += 10));
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SELECT YOUR FIGHTER</h1>
      <ul className={styles.fighters}>
        {images.map((img) => (
          <li id={img.id} key={img.id} data-disabled={img.disabled && 'disabled'} className={styles.fighter}>
            <img src={img.avatar} alt={img.name}></img>
          </li>
        ))}
        <img src={currObj.gif} className={styles.gif}></img>
      </ul>
    </div>
  );
};

export default ChooseHero;
