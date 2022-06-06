import s from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/contact-operations';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className={s.container}>
      <NavLink to="/">Home</NavLink>
      <b>-</b>
      <NavLink to="/contacts">Conntacts</NavLink>
    </div>
  );
}
