import Filter from 'components/filter';
import Form from 'components/contact-form';
import ContactsList from 'components/contacts-list';
import Pagination from 'components/pagination';
import s from './style.module.css';

export default function ContactsPage() {
  return (
    <div className={s.container}>
      <div>
        <Form />
        <Filter />
      </div>
      <ContactsList />
      <Pagination />
    </div>
  );
}
