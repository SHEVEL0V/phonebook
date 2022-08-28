import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ClipLoader from 'react-spinners/ClipLoader';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

import { addContact } from 'redux/contacts/contact-operations';
import { loadingAddSel, errorAddSel } from 'redux/contacts/contacts-selectors';

import s from './style.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const loadingAdd = useSelector(loadingAddSel);
  const error = useSelector(errorAddSel);
  const selectRef = useRef();

  useEffect(() => {
    selectRef.current.focus();

    if (!error && !loadingAdd) {
      setName('');
      setPhone('');
      setEmail('');
    }
  }, [error, loadingAdd]);

  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        dispatch(addContact({ name, phone, email }));
      }}
    >
      <label className={s.item}>
        <b className={s.text}>Name:</b>
        <input
          className={s.input}
          type="text"
          name="name"
          ref={selectRef}
          required
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </label>
      <label className={s.item}>
        <b className={s.text}>Phone:</b>
        <input
          className={s.input}
          type="tel"
          name="phone"
          required
          onChange={e => setPhone(e.target.value)}
          value={phone}
        />
      </label>
      <label className={s.item}>
        <b className={s.text}>Email:</b>
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
        <span>{loadingAdd ? <ClipLoader size={15} /> : <BsFillArrowRightSquareFill />}</span>
      </button>
    </form>
  );
}
