import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Section from '../Section/Section';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import EditContact from '../EditContact/EditContact';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchEditContact,
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
  const [dataForEdit, setDataForEdit] = useState(null);

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

  const handleOpenEditForm = data => {
    setOpenEdit(false);
    setDataForEdit(data);

    filteredContacts.filter(contact => {
      const { id } = contact;
      if (id === data) {
        setOpenEdit(!openEdit);
        return contact;
      }
      return 'fail';
    });
  };

  const handleEditContact = contactId => {
    dispatch(fetchEditContact(contactId));
    setOpenEdit(false); //із форми редагування приходять всі данні контакта
  };

  return (
    <div className={css.wrapper}>
      <Section
        style={css.secion}
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
          onEditContact={handleOpenEditForm}
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
        onToggle={openEdit}
        setHandler={handleOpenEditForm}
      >
        <EditContact data={dataForEdit} onSubmit={handleEditContact} />
      </BasicModal>
    </div>
  );
};

export default Contacts;
