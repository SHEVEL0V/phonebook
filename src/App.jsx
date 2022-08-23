import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/container';
import Header from 'components/header';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn } from 'redux/user/user-selectors';
import { fetchCurentUser } from 'redux/user/user-operations';
import Home from 'views/home-page';
import ContactsPage from 'views/contacts-page';
import { useEffect } from 'react';
import PrivateRoute from './components/Private-route';
import UserPage from 'views/user-page';

export default function App() {
  const status = useSelector(isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectPath="/contacts" status={status}>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectPath="/" status={!status}>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute redirectPath="/" status={!status}>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h2>Address not found</h2>} />
      </Routes>
    </Container>
  );
}
