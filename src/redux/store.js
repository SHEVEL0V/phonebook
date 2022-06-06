import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterValue, loading } from './contacts-reduser';
import { user, contacts } from './contacts-slace';

const userReduser = user.reducer;
const contactsReduse = contacts.reducer;

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
    filterValue,
    loading,
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
