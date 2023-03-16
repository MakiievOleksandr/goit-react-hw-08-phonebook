import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Section from '../Section/Section';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-slice';
import { getfilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import css from './contacts.module.scss';
import { Button } from '@mui/material';
import BasicModal from 'components/shared/components/Modal/Modal';

const Contacts = () => {
  const filteredContacts = useSelector(getfilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const [addContactBtn, setAddContactBtn] = useState(false);
  const [filterField, setFilterField] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

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

  const handleFilterField = () => {
    setFilterField(!filterField);
  };

  const handleEditContact = data => {
    console.log(openEdit);
    setOpenEdit(true);
    filteredContacts.filter(({ id, name }) => {
      if (id === data) {
        console.log(name);
      }
      return 'fail';
    });
  };

  return (
    <div className={`${css.wrapper}`}>
      <Section
        title="Contacts"
        button={
          <>
            <Button onClick={handleFilterField} children={'Filter'} />
            <Button onClick={handleAddContactBtn} children={'Add new'} />
          </>
        }
      >
        <Filter
          filter={filter}
          onChangeFilter={changeFilter}
          setFF={filterField}
        />
        <ContactList
          onDeleteContact={onDeleteContact}
          filteredContacts={filteredContacts}
          onEditContact={handleEditContact}
        />
      </Section>
      <BasicModal
        title={'New contact'}
        onToggle={addContactBtn}
        setHandler={setAddContactBtn}
      >
        <ContactForm onSubmit={onAddContact} />
      </BasicModal>

      <BasicModal
        title={'Contact"s name'}
        // onToggle={openEdit}
        setHandler={handleEditContact}
      ></BasicModal>
    </div>
  );
};

export default Contacts;
