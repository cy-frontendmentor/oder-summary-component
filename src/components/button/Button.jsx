import classes from './Button.module.scss';
import React from 'react';

const Button = ({children}) => {
  return <button className={classes.btn}>{children}</button>;
};

export default Button;
