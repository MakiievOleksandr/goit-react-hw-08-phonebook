import { useSelector } from 'react-redux';

import { SvgIcon } from '@mui/material';
import { Menu } from '@mui/icons-material';

import BasicMenu from 'components/shared/components/Menu/Menu';
// import LogoutButton from './LogoutButton/LogoutButton';

import { getUser } from 'redux/auth/auth-selector';

import css from './user-menu.module.scss';

const UserMenu = () => {
  const { name } = useSelector(getUser);

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>{name}</p>
      <BasicMenu
        hamburger={
          <SvgIcon
            sx={{
              color: '#1976d2',
            }}
          >
            <Menu />
          </SvgIcon>
        }
      />
      {/* <LogoutButton /> */}
    </div>
  );
};

export default UserMenu;
