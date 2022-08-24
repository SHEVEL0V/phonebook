import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const USERS_URL = 'https://rest-api-shevelov.herokuapp.com/api';

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

const logoutUser = createAsyncThunk('logoutUser', () => {
  token.unset('none');
});

const updateAvatar = createAsyncThunk('updateAvatar', async credentitals => {
  console.log('add photo !!!  axios response Cors');
  try {
    Notify.success('add photo !!!  axios response Cors');
    // const { data } = await axios.patch('/users/avatars', {
    //   data: credentitals,
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // });
    // return data;
  } catch (err) {
    const { message } = err.response.data;
    Notify.failure(message);
    throw new Error('Error update avatar');
  }
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

export { singnupUser, loginUser, logoutUser, fetchCurentUser, updateAvatar };
