import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/container/container';
import Form from './components/contact-form/contact-form';
import ContactsList from './components/contacts-list/contactsList';
import Filter from './components/filter/filter';
import Header from 'components/header/header';
import LoginForm from 'components/login-form/login-form';
import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/contacts-selectors';
import Home from 'views/homePage/home';
import ContactsPage from 'views/contactsPage/contactsPage';
import PrivateRoute from 'components/privateRoute';

export default function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {useSelector(isLoggedIn) && (
          <Route path="contacts" element={<ContactsPage />} />
        )}
      </Routes>
    </Container>
  );
}
