import Filter from 'components/filter/filter';
import Form from 'components/contact-form/contact-form';
import ContactsList from 'components/contacts-list/contactsList';

export default function ContactsPage() {
  return (
    <>
      <Form />
      <Filter />
      <ContactsList />
    </>
  );
}
