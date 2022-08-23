import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const USERS_URL = 'https://notebook-serv.herokuapp.com/';

axios.defaults.baseURL = USERS_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const singnupUser = createAsyncThunk('user/register', async credentitals => {
  try {
    const { data } = await axios.post('/users/register', credentitals);
    Notify.success(data.message);
    return {};
  } catch (err) {
    const { message } = err.response.data;
    Notify.failure(message);
    throw new Error('Error singnup user');
  }
});

const loginUser = createAsyncThunk('loginUser', async credentitals => {
  try {
    const { data } = await axios.post('/users/login', credentitals);
    token.set(data.token);
    return data;
  } catch (err) {
    const { message } = err.response.data;
    Notify.failure(message);
    throw new Error('Error login user');
  }
});

const logoutUser = createAsyncThunk('logoutUser', credentitals => {
  token.unset('none');
});

const fetchCurentUser = createAsyncThunk('fetchCurentUser', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const tokenCurentUser = state.auth.token;

  if (!tokenCurentUser) {
    throw new Error('authentication error!');
  }

  token.set(tokenCurentUser);

  try {
    // await axios.get('/contacts');
    console.log('authentication');
  } catch (err) {
    const { message } = err.response.data;
    Notify.failure(message);
    throw new Error('authentication error!');
  }
});

export { singnupUser, loginUser, logoutUser, fetchCurentUser };
