import PropTypes from 'prop-types';

import { List, SvgIcon } from '@mui/material';
import { Clear } from '@mui/icons-material';

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
          <span className={css.data}>{contact.name}</span>
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
          <span className={css.data}>{contact.number}</span>
        </span>
      </p>

      <button
        className={css.delBtn}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        <SvgIcon
          sx={{
            fontSize: 20,
            color: 'red',
          }}
        >
          <Clear />
        </SvgIcon>
      </button>
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
