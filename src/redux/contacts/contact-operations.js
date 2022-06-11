import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContact = createAsyncThunk('getContact', async () => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch {
    console.log('fetch error!!!!');
  }
});

const addContact = createAsyncThunk('addContact', async contact => {
  try {
    await axios.post('/contacts', contact);
    const { data } = await axios.get('/contacts');
    return data;
  } catch {
    console.log('add error!!!!');
  }
});

const deleteContact = createAsyncThunk(
  'deleteContact',
  async contact => {
    try {
      await axios.delete(`/contacts/${contact}`);
      const { data } = await axios.get('/contacts');
      return data;
    } catch {
      console.log('delete error!!!!');
    }
  },
);

export { getContact, addContact, deleteContact };
