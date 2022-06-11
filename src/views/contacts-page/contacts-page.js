import Filter from 'components/filter/filter';
import Form from 'components/contact-form/contact-form';
import ContactsList from 'components/contacts-list/contacts-list';
import s from './contacts-page.module.css';

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
