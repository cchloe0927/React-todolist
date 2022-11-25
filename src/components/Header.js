import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <p>My Todo List</p>
      <p>React</p>
    </div>
  );
};

export default Header;
