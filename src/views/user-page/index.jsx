import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/user/user-operations';
import { userSel } from 'redux/user/user-selectors';
import s from './style.module.css';

export default function UserPage() {
  const [file, setFile] = useState('');
  const { avatarURL, name, email } = useSelector(userSel);
  const dispatch = useDispatch();
  const onSubmit = e => {
    setFile(e.target.files);
  };

  return (
    <div className={s.container}>
      <img className={s.img} src={avatarURL} alt="avatar" />
      <form className={s.text}>
        <input type="file" onClick={onSubmit} />

        <button
          className={s.button}
          type="submit"
          onClick={e => {
            e.preventDefault();
            dispatch(updateAvatar(file));
          }}
        >
          add photo
        </button>
      </form>

      <b className={s.text}>Name: {name}</b>
      <b className={s.text}>
        Email:
        <a target="blank" href={email}>
          {email}
        </a>
      </b>
    </div>
  );
}
