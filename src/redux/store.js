import { configureStore } from '@reduxjs/toolkit';
import { filterValue } from './contacts-reduser';
import { contactsApi, userApi } from 'redux/contacts-RTK';
import user from './contacts-slace';

export const store = configureStore({
  reducer: {
    filterValue,
    user: user.reducer,

    // [contactsApi.reducerPath]: contactsApi.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(contactsApi.middleware),
});
