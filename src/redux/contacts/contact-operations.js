import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3030/api';

const getContact = createAsyncThunk('getContact', async () => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch ({ message }) {
    Notify.failure(message);
    throw new Error('fetch error!');
  }
});

const addContact = createAsyncThunk('addContact', async contact => {
  try {
    await axios.post('/contacts', contact);
    const { data } = await axios.get('/contacts', contact);
    return data;
  } catch ({ message }) {
    Notify.failure(message);
    throw new Error('add contacts error!');
  }
});

const deleteContact = createAsyncThunk(
  'deleteContact',
  async contact => {
    try {
      await axios.delete(`/contacts/${contact}`);
      const { data } = await axios.get('/contacts');
      return data;
    } catch ({ message }) {
      Notify.failure(message);
      throw new Error('delete  contacts error!');
    }
  },
);

export { getContact, addContact, deleteContact };
