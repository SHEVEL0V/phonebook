import React from 'react';
import Container from './components/container/container';
import Form from './components/form/form';
import ContactsList from './components/contactsList/contactsList';
import Filter from './components/filter/filter';
import Header from 'components/header/header';

export default function App() {
  return (
    <Container>
      <Header />
      <div>
        <Form />
        <Filter />
      </div>
      <ContactsList />
    </Container>
  );
}
