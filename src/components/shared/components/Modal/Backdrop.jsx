import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useCallback, useEffect } from 'react';

export default function SimpleBackdrop({ openBcdrp, onToggle }) {
  const [open, setOpen] = React.useState(false);

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    if (!openBcdrp) {
      console.log(openBcdrp);
      return;
    }
    handleToggle();
  }, [openBcdrp]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
