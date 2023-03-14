import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/shared/components/Button/Button';

import { logout } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selector';

import css from './user-menu.module.scss';

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
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
