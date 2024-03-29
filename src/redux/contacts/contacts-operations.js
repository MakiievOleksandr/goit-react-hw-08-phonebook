import { createAsyncThunk } from '@reduxjs/toolkit';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import * as api from '../../components/shared/services/contacts';

Notify.init({
  width: '300px',
  position: 'center-top',
});

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
    try {
      const result = await api.addContact(data);
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
        Notify.warning(`${name} is already in contacts!`);
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
    try {
      const result = await api.editContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
