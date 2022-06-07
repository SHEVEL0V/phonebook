import { useDispatch, useSelector } from 'react-redux';
import { userName } from 'redux/contacts-selectors';
import { logoutUser } from 'redux/contact-operations';
import s from './avatar.module.css';

export default function Avatar() {
  const dispatch = useDispatch();
  const name = useSelector(userName);
  return (
    <div className={s.container}>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Out
      </button>
      <div className={s.logo}>
        <b>{name ? name : 'name'}</b>
      </div>
    </div>
  );
}
