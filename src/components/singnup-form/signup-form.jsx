import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import ClipLoader from 'react-spinners/ClipLoader';
import { loading, error } from 'redux/user/user-selectors';
import { singnupUser } from 'redux/user/user-operations';
import s from './signup-form.module.css';

export default function SignupForm({ onClose }) {
  const [name, getName] = useState('');
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(singnupUser({ name, email, password }));
  };

  if (useSelector(error)) {
    Notify.warning('error created');
  }

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <button
        className={s.buttonClose}
        type="button"
        onClick={onClose}
      >
        <IoClose />
      </button>
      <label className={s.items}>
        name:
        <input
          className={s.input}
          name="name"
          placeholder=" name"
          onChange={e => getName(e.target.value)}
          value={name}
        ></input>
      </label>
      <label className={s.items}>
        email:
        <input
          className={s.input}
          name="email"
          placeholder=" email"
          onChange={e => getEmail(e.target.value)}
          value={email}
        ></input>
      </label>
      <label className={s.items}>
        password:
        <input
          className={s.input}
          name="password"
          placeholder=" password"
          onChange={e => getPassword(e.target.value)}
          value={password}
        ></input>
      </label>
      <button
        className={s.button}
        disabled={name === '' || email === '' || password === ''}
        type="submit"
        onClick={onSubmit}
      >
        signup{useSelector(loading) && <ClipLoader size={15} />}
      </button>
    </form>
  );
}
