import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loginUser, logoutUser } from 'redux/contact-operations';
import s from './signupForm.module.css';

export default function SignupForm({ onClose }) {
  const [name, getName] = useState('');
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ name, email, password }));
    getName('');
    getEmail('');
    getPassword('');
    console.log('yes');
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <button
        className={s.buttonClose}
        type="button"
        onClick={onClose}
      >
        +
      </button>
      <label className={s.items}>
        name:
        <input
          name="name"
          onChange={e => getName(e.target.value)}
          value={name}
        ></input>
      </label>
      <label className={s.items}>
        email:
        <input
          name="email"
          onChange={e => getEmail(e.target.value)}
          value={email}
        ></input>
      </label>
      <label className={s.items}>
        password:
        <input
          name="password"
          onChange={e => getPassword(e.target.value)}
          value={password}
        ></input>
      </label>
      <button className={s.button} type="submit">
        sinup
      </button>
    </form>
  );
}
