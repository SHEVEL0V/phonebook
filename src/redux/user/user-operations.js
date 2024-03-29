import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { token } from 'service/axios';

const singnupUser = createAsyncThunk('user/register', async credentitals => {
  try {
    const { data } = await axios.post('/users/register', credentitals);
    Notify.success(data.message);
    token.set(data.token);
    return data;
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

const repitSendMail = createAsyncThunk('repitSendMail', async email => {
  try {
    const { data } = await axios.post('/users/verify', { email: email });
    Notify.success(`Email send to email: ${email}`);
    return data;
  } catch (err) {
    const { message } = err.response.data;
    Notify.failure(message);
    throw new Error('Error is emait not found');
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

export { singnupUser, loginUser, repitSendMail, logoutUser, fetchCurentUser, updateAvatar };
