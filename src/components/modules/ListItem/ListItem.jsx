import PropTypes from 'prop-types';

import { List, SvgIcon, Icon } from '@mui/material';
import { Clear } from '@mui/icons-material';
import MyButton from 'components/shared/components/Button/Button';

import { Person, Phone } from '@mui/icons-material';
import css from './list-item.module.scss';

function MyListItem({ onDeleteContact, contact }) {
  return (
    <List className={css.listItem}>
      <p className={css.text}>
        <span className={css.contactField}>
          <SvgIcon sx={{ fontSize: 15 }}>
            <Person />
          </SvgIcon>
          {contact.name}
        </span>
        <br />
        <span className={css.contactField}>
          <SvgIcon
            sx={{
              fontSize: 15,
            }}
          >
            <Phone />
          </SvgIcon>
          {contact.number}
        </span>
      </p>
      <MyButton type="button" onClick={() => onDeleteContact(contact.id)}>
        <SvgIcon
          sx={{
            fontSize: 20,
            color: 'blue',
          }}
        >
          <Clear />
        </SvgIcon>
      </MyButton>
    </List>
  );
}

export default MyListItem;

MyListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
