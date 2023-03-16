import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Section from '../Section/Section';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-slice';
import { getfilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import css from './contacts.module.scss';
import Button from 'components/shared/components/Button/Button';
import BasicModal from 'components/shared/components/Modal/Modal/Modal';

const Contacts = () => {
  const filteredContacts = useSelector(getfilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const [addContactBtn, setAddContactBtn] = useState(false);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = contactData => {
    dispatch(fetchAddContact(contactData));
    setAddContactBtn(false);
  };

  const onDeleteContact = contactId => {
    dispatch(fetchDeleteContact(contactId));
    const action = setFilter('');
    dispatch(action);
  };

  const changeFilter = ({ target }) => {
    const { value } = target;
    const action = setFilter(value);
    dispatch(action);
  };

  const handleAddContactBtn = () => {
    setAddContactBtn(!addContactBtn);
  };

  return (
    <div className={css.wrapper}>
      <Section
        title="Contacts"
        button={
          <Button
            // size={'small'}
            onClick={handleAddContactBtn}
            children={'Add contact'}
          />
        }
      >
        <Filter filter={filter} onChangeFilter={changeFilter} />
        <ContactList
          onDeleteContact={onDeleteContact}
          filteredContacts={filteredContacts}
        />
      </Section>
      <BasicModal
        onSubmit={onAddContact}
        openBcdrp={addContactBtn}
        onOpenBcdrp={setAddContactBtn}
      />
    </div>
  );
};

export default Contacts;
