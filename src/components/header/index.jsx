import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Avatar from 'components/avatar';
import LoginForm from 'components/login-form';
import { isLoggedIn, error } from 'redux/user/user-selectors';
import s from './style.module.css';

export default function Header() {
  const statusLogged = useSelector(isLoggedIn);
  const statusError = useSelector(error);

  if (statusError) {
    Notify.failure('login not avalide!');
  }

  return (
    <div className={s.container}>
      {statusLogged ? (
        <NavLink to="/contacts" className={s.nav}>
          Contacts
        </NavLink>
      ) : (
        <NavLink to="/" className={s.nav}>
          Home
        </NavLink>
      )}
      {statusLogged ? <Avatar /> : <LoginForm />}
    </div>
  );
}
