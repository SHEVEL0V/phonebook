import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/container/container';
import Header from 'components/header/header';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn } from 'redux/user/user-selectors';
import { fetchCurentUser } from 'redux/user/user-operations';
import Home from 'views/home-page/home-page';
import ContactsPage from 'views/contacts-page/contacts-page';
import { useEffect } from 'react';
import PrivateRoute from './components/Private-route';

export default function App() {
  const status = useSelector(isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      dispatch(fetchCurentUser());
    }
  }, [dispatch, status]);

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
        <Route path="*" element={<h2>Address not found</h2>} />
      </Routes>
    </Container>
  );
}
