import s from './header.module.css';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/contact-operations';

export default function Header() {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      loginUser({
        email: 'Ashevelov@mail.com',
        // name: 'Ashevelov',
        password: '123456789',
      }),
    );
  };

  return (
    <div className={s.container}>
      <div>Home</div>
      <div>Conntacts</div>
      <div>
        <form onSubmit={onSubmit}>
          <label>
            login<input></input>
          </label>
          <label>
            password<input></input>
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
