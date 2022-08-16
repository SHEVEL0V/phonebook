import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const USERS_URL = 'https://notebook-serv.herokuapp.com/api/users';

axios.defaults.baseURL = USERS_URL;

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
    const { data } = await axios.post('/register', credentitals);
    token.set(data.token);
    return data;
  },
);

const loginUser = createAsyncThunk(
  'loginUser',
  async credentitals => {
    const { data } = await axios.post('/login', credentitals);
    token.set(data.token);
    return data;
  },
);

const logoutUser = createAsyncThunk(
  'logoutUser',
  async credentitals => {
    try {
      const { data } = await axios.post('/logout', credentitals);
      token.unset(data.token);
    } catch {
      throw new Error('logout error!');
    }
  },
);

const fetchCurentUser = createAsyncThunk(
  'fetchCurentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenCurentUser = state.auth.token;

    if (tokenCurentUser === null) {
      return;
    }

    token.set(tokenCurentUser);
    try {
      await axios.get('/users/current');
    } catch {
      throw new Error('authentication error!');
    }
  },
);

export { singnupUser, loginUser, logoutUser, fetchCurentUser };
