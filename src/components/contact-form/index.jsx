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
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(loadingAdd);
  const { contacts } = useSelector(data);
  const selectRef = useRef();

  useEffect(() => {
    selectRef.current.focus();
  }, []);

  const onSubmit = () => {
    removeState();

    if (
      contacts.every(e => e.name.toLowerCase() !== name.toLowerCase())
    ) {
      dispatch(addContact({ name, phone, email }));
    } else {
      alert(`"${name}" is already in contact!`);
    }
  };

  const removeState = () => {
    setName('');
    setPhone('');
    setEmail('');
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
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <p className={s.text}>Phone</p>
        <input
          className={s.input}
          type="tel"
          name="phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setPhone(e.target.value)}
          value={phone}
        />
      </label>
      <label>
        <p className={s.text}>Email</p>
        <input
          className={s.input}
          type="email"
          name="email"
          required
          onChange={e => setEmail(e.target.value)}
          value={email}
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
