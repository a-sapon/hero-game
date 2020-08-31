import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fighters from '../assets/fighters.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { getRandomNum } from '../helper';
import styles from './VsScreen.module.css';

const VsScreen = ({ location }) => {
  const history = useHistory();

  useEffect(() => {
    const timeOutId = setTimeout(() => history.push('/'), 10000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [history]);

  const [firstColor, setFirstColor] = useState('#a0a0a0');
  const [secondColor, setSecondColor] = useState('#a0a0a0');
  const [thirdColor, setThirdColor] = useState('#a0a0a0');
  const [fourthColor, setFourthColor] = useState('#a0a0a0');
  const [fifthColor, setFifthColor] = useState('#a0a0a0');
  const [sixthColor, setSixthColor] = useState('#a0a0a0');

  useEffect(() => {
    window.addEventListener('keydown', onKeyPressed);
    return () => {
      window.removeEventListener('keydown', onKeyPressed);
    };
  });

  function onKeyPressed(e) {
    switch (e.keyCode) {
      case 81:
        setFirstColor(changeColor);
        break;
      case 87:
        setSecondColor(changeColor);
        break;
      case 69:
        setThirdColor(changeColor);
        break;
      case 82:
        setFourthColor(changeColor);
        break;
      case 84:
        setFifthColor(changeColor);
        break;
      case 89:
        setSixthColor(changeColor);
        break;
      default:
        return;
    }
  }

  function pickColor() {
    const colors = [
      '#ff33cc',
      '#ffff00',
      '#800080',
      '#33ccff',
      '#00ff00',
      '#ff6600',
      '#0000cc',
      '#cc99ff',
    ];
    const randomNum = getRandomNum(colors);
    return colors[randomNum];
  }

  function changeColor(prev) {
    if (prev === '#a0a0a0') {
      return pickColor();
    } else {
      return '#a0a0a0';
    }
  }

  const fighter1 = fighters.find(
    (item) => item.id === String(location.state.fighter1)
  );
  const fighter2 = fighters[location.state.fighter2];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.fighter1}>
          <img src={fighter1.vs} alt={fighter1.name}></img>
        </div>
        <div className={styles.fighter2}>
          <img src={fighter2.vs} alt={fighter2.name}></img>
        </div>
        <ul className={styles.icons}>
          <li className={styles.iconsItem}>
            <FontAwesomeIcon icon={faCoffee} size='lg' color={firstColor} />
          </li>
          <li className={styles.iconsItem}>
            <FontAwesomeIcon icon={faCoffee} size='lg' color={secondColor} />
          </li>
          <li className={styles.iconsItem}>
            <FontAwesomeIcon icon={faCoffee} size='lg' color={thirdColor} />
          </li>
          <li className={styles.iconsItem}>
            <FontAwesomeIcon icon={faCoffee} size='lg' color={fourthColor} />
          </li>
          <li className={styles.iconsItem}>
            <FontAwesomeIcon icon={faCoffee} size='lg' color={fifthColor} />
          </li>
          <li className={styles.iconsItem}>
            <FontAwesomeIcon icon={faCoffee} size='lg' color={sixthColor} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VsScreen;
