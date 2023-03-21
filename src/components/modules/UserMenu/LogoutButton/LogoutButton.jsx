import { useDispatch } from 'react-redux';

import { Button, SvgIcon } from '@mui/material';
import { LogoutRounded } from '@mui/icons-material';

import { logout } from 'redux/auth/auth-operations';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    return;
  };
  return (
    <Button onClick={onLogout}>
      <SvgIcon>
        <LogoutRounded
          sx={{
            fontSize: 15,
          }}
        />
      </SvgIcon>
    </Button>
  );
};

export default LogoutButton;
