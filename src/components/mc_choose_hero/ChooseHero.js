import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fighters from '../assets/fighters.json';
import { getRandomNum } from '../helper';
import styles from './ChooseHero.module.css';

const ChooseHero = () => {
  const [activeId, setActiveId] = useState(10);
  const currFighter = fighters.find(item => item.id === String(activeId));
  const history = useHistory();

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
    const lastEl = +fighters[fighters.length - 1].id;
    const firstEl = +fighters[0].id;
    if (e.key === 'ArrowRight') {
      if (activeId === lastEl) {setActiveId(firstEl)}
      else if (activeId === 16) {setActiveId(20)}
      else if (activeId === 26) {setActiveId(31)}
      else if (activeId === 35) {setActiveId(41)}
      else if (activeId === 22) {setActiveId((prev) => (prev += 2))}
      else {setActiveId((prev) => (prev += 1))}
    }
    if (e.key === 'ArrowLeft') {
      if (activeId === firstEl) {setActiveId(lastEl)}
      else if (activeId === 20 ) {setActiveId(16)}
      else if (activeId === 31) {setActiveId(26)}
      else if (activeId === 41) {setActiveId(35)}
      else if (activeId === 24) {setActiveId((prev) => (prev -= 2))}
      else {setActiveId((prev) => (prev -= 1))}
    }
    if (e.key === 'ArrowUp') {
      if (activeId < 20) {return}
      if (activeId === 33) {setActiveId((prev) => (prev -= 20))}
      else {setActiveId((prev) => (prev -= 10))}
    }
    if (e.key === 'ArrowDown') {
      if (activeId > 40 ) {return}
      else if (activeId === 20) {setActiveId((prev) => (prev += 11))}
      else if (activeId === 26) {setActiveId((prev) => (prev += 9))}
      else if (activeId === 13) {setActiveId((prev) => (prev += 20))}
      else {setActiveId((prev) => (prev += 10))}
    }
    if (e.key === 'Enter') {
      const randomNum = getRandomNum(fighters);
      history.push({
        pathname: '/vs',
        state: {fighter1: activeId, fighter2: randomNum}
      });
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SELECT YOUR FIGHTER</h1>
      <ul className={styles.fighters}>
        {fighters.map((img) => (
          <li id={img.id} key={img.id} className={styles.fighter}>
            <img src={img.avatar} alt={img.name}></img>
          </li>
        ))}
        <img src={currFighter.gif} alt={currFighter.name} className={styles.gif}></img>
      </ul>
    </div>
  );
};

export default ChooseHero;
