import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userName } from 'redux/contacts-selectors';
import { logoutUser } from 'redux/contact-operations';
import s from './avatar.module.css';

export default function Avatar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(userName);

  const logOut = () => {
    dispatch(logoutUser());
    navigate('./');
  };
  return (
    <div className={s.container}>
      <button className={s.button} type="button" onClick={logOut}>
        Out
      </button>
      <div className={s.logo}>
        <b>{name ? name : 'name'}</b>
      </div>
    </div>
  );
}
