import React from 'react';

import burgerLogo from '../../assets/images/burger.png';
import styles from './Logo.module.css'

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;