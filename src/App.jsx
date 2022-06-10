import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/container/container';
import Header from 'components/header/header';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedIn } from 'redux/user/user-selectors';
import { fetchCurentUser } from 'redux/user/user-operations';
import Home from 'views/homePage/home';
import ContactsPage from 'views/contactsPage/contactsPage';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {useSelector(isLoggedIn) && (
          <Route path="/contacts" element={<ContactsPage />} />
        )}
        <Route path="*" element={<h2>Address not found</h2>} />
      </Routes>
    </Container>
  );
}
