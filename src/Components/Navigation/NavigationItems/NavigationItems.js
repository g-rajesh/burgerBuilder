import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active>BurgerBuilder</NavigationItem>
    <NavigationItem link="/">CheckOut</NavigationItem>
  </ul>
);

export default navigationItems;