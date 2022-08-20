import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';

const limit = 6;
const page = 1;
const favorite = null;

const getContact = createAsyncThunk('getContact', async () => {
  try {
    const { data } = await axios.get('/contacts', {
      params: {
        limit,
        page,
        favorite,
      },
    });

    return data;
  } catch (err) {
    const { message } = err.response.data;
    Notify.failure(message);
    throw new Error('fetch error!');
  }
});

const addContact = createAsyncThunk('addContact', async contact => {
  try {
    await axios.post('/contacts', contact);
    const { data } = await axios.get('/contacts', contact);
    return data;
  } catch (err) {
    const { message } = err.response.data;
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
    } catch (err) {
      const { message } = err.response.data;
      Notify.failure(message);
      throw new Error('delete  contacts error!');
    }
  },
);

export { getContact, addContact, deleteContact };
