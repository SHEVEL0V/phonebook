import Filter from 'components/filter/filter';
import Form from 'components/contact-form/contact-form';
import ContactsList from 'components/contacts-list/contactsList';
import s from './contactsPage.module.css';

export default function ContactsPage() {
  return (
    <div className={s.container}>
      <div>
        <Form />
        <Filter />
      </div>
      <ContactsList />
    </div>
  );
}
