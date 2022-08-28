import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContact = createAsyncThunk('getContact', async req => {
  const { limit, page, favorite } = req;
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
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (err) {
    const { message } = err.response.data;
    Notify.failure(message);
    throw new Error('add contacts error!');
  }
});

const updateContact = createAsyncThunk('updateContact', async ({ id, contact }) => {
  try {
    const { data } = await axios.put(`/contacts/${id}`, contact);
    return data;
  } catch (err) {
    const { message } = err.response.data;
    Notify.failure(message);
    throw new Error('update contacts error!');
  }
});

const deleteContact = createAsyncThunk('deleteContact', async contact => {
  try {
    const { data } = await axios.delete(`/contacts/${contact}`);
    return data;
  } catch (err) {
    const { message } = err.response.data;
    Notify.failure(message);
    throw new Error('delete  contacts error!');
  }
});

const addStatusFavorite = createAsyncThunk('addStatusFavorite', async ({ id, favorite }) => {
  try {
    const { data } = await axios.put(`/contacts/${id}/favorite`, { favorite });
    return data;
  } catch (err) {
    const { message } = err.response.data;
    Notify.failure(message);
    throw new Error('add status favotite error!');
  }
});

export { getContact, addContact, deleteContact, addStatusFavorite, updateContact };
