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
      console.log('signup error!!!!');
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
      console.log('login error!!!!');
    }
  },
);

const logoutUser = createAsyncThunk(
  'logoutUser',
  async credentitals => {
    try {
      const { data } = await axios.post(
        '/users/logout',
        credentitals,
      );
      token.unset(data.token);
    } catch {
      console.log('logout error!!!!');
    }
  },
);
export { singnupUser, loginUser, logoutUser };
