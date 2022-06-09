import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginUser } from 'redux/user/user-operations';
import s from './login-form.module.css';

export default function LoginForm() {
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    if ((email, password)) {
      dispatch(
        loginUser({
          email,
          password,
        }),
      );
    }

    getEmail('');
    getPassword('');
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
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
        login
      </button>
    </form>
  );
}
