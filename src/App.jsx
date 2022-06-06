import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/container/container';
import Form from './components/contact-form/contact-form';
import ContactsList from './components/contacts-list/contactsList';
import Filter from './components/filter/filter';
import Header from 'components/header/header';
import LoginForm from 'components/login-form/login-form';
import { useSelector } from 'react-redux';

export default function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="contacts"
          element={
            <>
              <Form />
              <Filter />
              {isLoggedIn && <ContactsList />}
            </>
          }
        />
      </Routes>
    </Container>
  );
}
