import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const singnupUser = createAsyncThunk(
  'ruser/register',
  async credentitals => {
    try {
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        credentitals,
      );
      return console.log(data);
    } catch {
      console.log('error!!!!');
    }
  },
);

const loginUser = createAsyncThunk(
  'loginUser',
  async credentitals => {
    try {
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        credentitals,
      );

      console.log(data);
      return data;
    } catch {
      console.log('error!!!!');
    }
  },
);

export { singnupUser, loginUser };
