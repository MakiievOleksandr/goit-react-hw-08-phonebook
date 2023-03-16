import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import ContactForm from 'components/modules/ContactForm/ContactForm';

import css from './modal.module.scss';

const style = {
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ openBcdrp, onOpenBcdrp, onSubmit }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = useCallback(() => {
    setOpen(false);
    onOpenBcdrp(false);
  }, [onOpenBcdrp]);

  useEffect(() => {
    if (!openBcdrp) {
      handleClose();
      return;
    }
    handleOpen();
  }, [handleClose, openBcdrp]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={css.modal} sx={style}>
          <h3>New contact</h3>
          <ContactForm onSubmit={onSubmit} />
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
