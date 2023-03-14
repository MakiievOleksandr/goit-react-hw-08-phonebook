import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import MyContactList from '../ContactList/ContactList';
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
      {addContactBtn && (
        <Section
          style={css.formal}
          title="Add contact"
          button={
            <Button
              style={css.addBtn}
              onClick={handleAddContactBtn}
              children={addContactBtn && 'Hide'}
            />
          }
        >
          <ContactForm onSubmit={onAddContact} />
        </Section>
      )}
      <Section
        title="Contacts"
        button={
          !addContactBtn && (
            <Button
              onClick={handleAddContactBtn}
              children={!addContactBtn && 'Add contact'}
            />
          )
        }
      >
        <Filter filter={filter} onChangeFilter={changeFilter} />
        <MyContactList
          onDeleteContact={onDeleteContact}
          filteredContacts={filteredContacts}
        />
      </Section>
    </div>
  );
};

export default Contacts;
