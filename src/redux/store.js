import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterValue } from './filter/filter-reduser';
import contactsReduse from './contacts/contacts-slice';
import userReduser from './user/user-slise';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn', 'user', 'contacts'],
};

export const store = configureStore({
  reducer: {
    filterValue,
    auth: persistReducer(persistConfig, userReduser),
    contacts: contactsReduse,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
