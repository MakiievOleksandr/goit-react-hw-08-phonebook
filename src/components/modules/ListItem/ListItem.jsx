import PropTypes from 'prop-types';

import { List, SvgIcon } from '@mui/material';
import { Clear } from '@mui/icons-material';
import MyButton from 'components/shared/components/Button/Button';

import css from './list-item.module.scss';

function MyListItem({ onDeleteContact, contact }) {
  return (
    <List className={css.listItem}>
      <p className={css.text}>
        {contact.name}
        {': '}
        {contact.number}
      </p>
      <MyButton
        type="button"
        onClick={() => onDeleteContact(contact.id)}
        className={css.btn}
      >
        <SvgIcon>
          <Clear
            sx={{
              color: 'red',
            }}
          />
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
