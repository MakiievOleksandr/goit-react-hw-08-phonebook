import * as React from 'react';
import Button from '@mui/material/Button';
import css from './button.module.scss';

const MyButton = ({ children, size, type = 'submit', onClick, ...props }) => {
  return (
    <Button
      size={size}
      className={`${css.button} ${props.style}`}
      onClick={onClick}
      type={type}
    >
      {children}{' '}
    </Button>
  );
};

export default MyButton;
