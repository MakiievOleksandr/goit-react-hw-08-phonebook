import * as React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ children, size, type = 'submit', onClick, ...props }) => {
  return (
    <Button className={props.style} size={size} onClick={onClick} type={type}>
      {children}{' '}
    </Button>
  );
};

export default MyButton;
