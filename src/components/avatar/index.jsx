import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userName } from 'redux/user/user-selectors';
import { logoutUser } from 'redux/user/user-operations';
import s from './style.module.css';

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
      <button className={s.button} onClick={logOut}>
        <p>{name ? name : 'name'}</p>-<b>Out</b>
      </button>
    </div>
  );
}
