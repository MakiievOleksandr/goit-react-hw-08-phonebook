import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../components/shared/services/contacts';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contact/add',
  async (data, { rejectWithValue }) => {
    // console.log('data:', data);
    try {
      const result = await api.addContact(data);
      // console.log('result:', result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normalizeName = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        return name.toLowerCase() === normalizeName;
      });
      if (result) {
        alert(`${name} is already in contacts!`);

        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchEditContact = createAsyncThunk(
  'contact/patch',
  async (data, { rejectWithValue }) => {
    // console.log(data);
    // console.log(id); //приходять всі данні контакта з Contacts.jsx
    try {
      const result = await api.editContact(data);
      // console.log(data);
      // console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
