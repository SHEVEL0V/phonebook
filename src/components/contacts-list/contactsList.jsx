import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector, useDispatch } from 'react-redux';

import ContactCard from './contactCard';

import { getContact } from 'redux/contact-operations';
import s from './contactsList.module.css';

export default function ContactsList() {
  const loading = useSelector(state => state.contacts.loading);
  const contacts = useSelector(state => state.contacts.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch, loading]);

  const filter = useSelector(state => state.filterValue);

  if (false) {
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
      <div>
        <h2>Contacts:</h2>
        <ul>
          {filterList.map((el, inx) => (
            <ContactCard key={el.id} card={el} index={inx} />
          ))}
        </ul>
      </div>
    );
  }
}
