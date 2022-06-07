import s from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/contact-operations';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from 'components/avatar/avatar';
import LoginForm from 'components/login-form/login-form';
import { isLoggedIn } from 'redux/contacts-selectors';

export default function Header() {
  const isLogged = useSelector(isLoggedIn);
  return (
    <div className={s.container}>
      <NavLink
        to="/"
        className={s.nav}
        style={({ isActive }) =>
          isActive ? { color: 'red' } : undefined
        }
      >
        Home
      </NavLink>
      {isLogged && (
        <NavLink
          to="/contacts"
          className={s.nav}
          style={({ isActive }) =>
            isActive ? { color: 'red' } : undefined
          }
        >
          Conntacts
        </NavLink>
      )}
      {isLogged ? <Avatar /> : <LoginForm />}
    </div>
  );
}
