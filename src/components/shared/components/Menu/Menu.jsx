import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';

import { NavLink } from 'react-router-dom';

import LogoutButton from 'components/modules/UserMenu/LogoutButton/LogoutButton';

import { ContactsRounded, HomeRounded } from '@mui/icons-material';

export default function BasicMenu({ hamburger }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {hamburger}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <NavLink
          style={{
            textDecoration: 'none',
          }}
          to="/"
          onClick={handleClose}
        >
          <MenuItem
            dense={true}
            sx={{
              color: '#000000',
              paddingTop: 0,
              paddingBottom: 0,
            }}
          >
            <p
              style={{
                margin: '0 30px 0 0',
              }}
            >
              Home
            </p>
            <HomeRounded />
          </MenuItem>
        </NavLink>
        <NavLink
          style={{
            textDecoration: 'none',
          }}
          to="/contacts"
          onClick={handleClose}
        >
          <MenuItem
            dense={true}
            divider={true}
            sx={{
              color: '#000000',
              paddingTop: 0,
              paddingBottom: 0,
            }}
          >
            <p
              style={{
                margin: '0 13px 0 0',
              }}
            >
              Contacts
            </p>
            <ContactsRounded
              sx={{
                fontSize: 20,
              }}
            />
          </MenuItem>
        </NavLink>
        <MenuItem dense={true} onClick={handleClose}>
          Theme
        </MenuItem>
        <MenuItem dense={true} onClick={handleClose}>
          Language
        </MenuItem>
        <MenuItem dense={true} onClick={handleClose}>
          <p
            style={{
              margin: '0 10px 0 0',
            }}
          >
            Logout
          </p>
          <LogoutButton />
        </MenuItem>
      </Menu>
    </div>
  );
}
