import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/shared/components/Button/Button';

import { logout } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selector';

import { LogoutRounded } from '@mui/icons-material';

import css from './user-menu.module.scss';
import { SvgIcon } from '@mui/material';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    return;
  };
  return (
    <div className={css.userMenu}>
      <p className={css.userName}>{name}</p>
      <Button style={css.outBtn} onClick={onLogout}>
        <SvgIcon>
          <LogoutRounded />
        </SvgIcon>
      </Button>
    </div>
  );
};

export default UserMenu;
