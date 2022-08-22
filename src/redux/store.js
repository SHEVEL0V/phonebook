import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filter from './filter/slise';
import pagination from './pagination/slice';
import contactsReduse from './contacts/contacts-slice';
import userReduser from './user/user-slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn', 'user', 'contacts', 'avatarURL'],
};

export const store = configureStore({
  reducer: {
    filter,
    pagination,
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
