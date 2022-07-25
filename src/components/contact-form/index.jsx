import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { addContact } from 'redux/contacts/contact-operations';
import { useSelector } from 'react-redux';
import { loadingAdd, data } from 'redux/contacts/contacts-selectors';
import s from './style.module.css';
import { useEffect } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(loadingAdd);
  const contacts = useSelector(data);
  const selectRef = useRef();

  useEffect(() => {
    selectRef.current.focus();
  }, []);

  const onSubmit = () => {
    removeState();

    if (
      contacts.every(e => e.name.toLowerCase() !== name.toLowerCase())
    ) {
      dispatch(addContact({ name, number }));
    } else {
      alert(`"${name}" is already in contact!`);
    }
  };

  const removeState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label>
        <p className={s.text}>Name</p>
        <input
          className={s.input}
          type="text"
          name="name"
          ref={selectRef}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <p className={s.text}>Number</p>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setNumber(e.target.value)}
          value={number}
        />
      </label>
      <button className={s.button} type="sabmit">
        add contact
        <span>
          {loading ? (
            <ClipLoader size={15} />
          ) : (
            <BsFillArrowRightSquareFill />
          )}
        </span>
      </button>
    </form>
  );
}
