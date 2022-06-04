import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import {
  useAddContactsMutation,
  useGetContactsQuery,
} from 'redux/contacts-RTK';
import s from './form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data } = useGetContactsQuery('');

  const [updatePost, { isLoading: isUpdating }] =
    useAddContactsMutation();

  const onSubmit = () => {
    removeState();

    if (
      data.every(e => e.name.toLowerCase() !== name.toLowerCase())
    ) {
      updatePost({ name, phone });
    } else {
      alert(`"${name}" is already in contact!`);
    }
  };

  const removeState = () => {
    setName('');
    setPhone('');
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
          onChange={e => setPhone(e.target.value)}
          value={phone}
        />
      </label>
      <button className={s.button} type="sabmit">
        add contact
        <span>
          {isUpdating ? (
            <ClipLoader size={15} />
          ) : (
            <BsFillArrowRightSquareFill />
          )}
        </span>
      </button>
    </form>
  );
}
