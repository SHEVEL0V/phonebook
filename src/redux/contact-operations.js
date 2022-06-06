import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const singnupUser = createAsyncThunk(
  'ruser/register',
  async credentitals => {
    try {
      const { data } = await axios.post(
        '/users/signup',
        credentitals,
      );
      token.set(data.token);
    } catch {
      console.log('error!!!!');
    }
  },
);

const loginUser = createAsyncThunk(
  'loginUser',
  async credentitals => {
    try {
      const { data } = await axios.post('/users/login', credentitals);
      token.set(data.token);
      return data;
    } catch {
      console.log('error!!!!');
    }
  },
);

const logoutUser = createAsyncThunk(
  'logoutUser',
  async credentitals => {
    try {
      const { data } = await axios.post('/users/login', credentitals);
      token.set(data.token);
      return data;
    } catch {
      console.log('error!!!!');
    }
  },
);

const getContact = createAsyncThunk('getContact', async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log('get', data);
    return data;
  } catch {
    console.log('error!!!!');
  }
});

const addContact = createAsyncThunk('addContact', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch {
    console.log('error!!!!');
  }
});

const deleteContact = createAsyncThunk(
  'deleteContact',
  async contact => {
    try {
      const data = await axios.delete(`/contacts/${contact}`);
      console.log(data);
      return data;
    } catch {
      console.log('error!!!!');
    }
  },
);

export {
  singnupUser,
  loginUser,
  logoutUser,
  getContact,
  addContact,
  deleteContact,
};
