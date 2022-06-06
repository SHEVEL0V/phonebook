import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loginUser, logoutUser } from 'redux/contact-operations';
import s from './login-form.module.css';

export default function LoginForm() {
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');

  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);

  const login = useSelector(state => state.auth.isLoggedIn);
  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: 'Ashevelov@mail.com',
        // name: 'Ashevelov',
        password: '123456789',
      }),
    );
    getEmail('');
    getPassword('');
    console.log('yes');
  };

  return (
    <div className={s.container}>
      {login ? (
        <div>
          <div className={s.logo}>
            <h1>{userName ? userName : 'name'}</h1>
          </div>
          <button
            className={s.button}
            type="button"
            onClick={() => {
              dispatch(logoutUser());
            }}
          >
            logout
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <label className={s.items}>
            name:
            <input
              name="email"
              onChange={e => getEmail(e.target.value)}
              value={email}
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
            login
          </button>
        </form>
      )}
    </div>
  );
}
