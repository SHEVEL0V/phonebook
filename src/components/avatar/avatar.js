import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userName } from 'redux/user/user-selectors';
import { logoutUser } from 'redux/user/user-operations';
import Button from 'components/button/button';
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
      <Button onClick={logOut}>
        <p>{name ? name : 'name'}</p>-<b>Out</b>
      </Button>
    </div>
  );
}
