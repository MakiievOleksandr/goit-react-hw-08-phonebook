import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserLogin } from 'redux/auth/auth-selector';

import UserMenu from '../UserMenu/UserMenu';

import css from './navigation.module.scss';

const Navigation = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className={css.navbar}>
      {isLogin ? (
        <>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
          <UserMenu />
        </>
      ) : (
        <div className={css.authMenu}>
          <NavLink className={css.link} to="/login">
            Login
          </NavLink>
          <span className={css.board}>|</span>
          <NavLink className={css.link} to="/register">
            Registration
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navigation;
