import * as React from 'react';
import Button from '@mui/material/Button';
import css from './button.module.scss';

const MyButton = ({ children, type = 'submit', onClick, ...props }) => {
  return (
    <Button
      className={`${css.button} ${props.style}`}
      onClick={onClick}
      type={type}
    >
      {children}{' '}
    </Button>
  );
};

export default MyButton;



