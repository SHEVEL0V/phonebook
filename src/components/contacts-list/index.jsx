import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector, useDispatch } from 'react-redux';
import ContactCard from './card';
import { loadingFetch } from 'redux/contacts/contacts-selectors';
import { data } from 'redux/contacts/contacts-selectors';
import { getContact } from 'redux/contacts/contact-operations';
import s from './style.module.css';
import { authentication } from 'redux/user/user-selectors';

export default function ContactsList() {
  const loading = useSelector(loadingFetch);
  const { contacts } = useSelector(data);
  const status = useSelector(authentication);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      dispatch(getContact());
    }
  }, [dispatch, status]);

  const filter = useSelector(state => state.filterValue);

  if (loading) {
    return (
      <div className={s.loader}>
        <ClipLoader />
      </div>
    );
  }

  if (contacts) {
    const filterList = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <div className={s.container}>
        <h2>Contacts:</h2>
        <ul>
          {filterList.map((el, inx) => (
            <ContactCard key={el._id} card={el} index={inx} />
          ))}
        </ul>
      </div>
    );
  }
}