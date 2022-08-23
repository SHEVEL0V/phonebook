import { useSelector } from 'react-redux';
import { userSel } from 'redux/user/user-selectors';
import s from './style.module.css';

export default function UserPage() {
  const { avatarURL, name, email } = useSelector(userSel);

  const onSubmit = e => {
    // e.preventDefault();
    console.log(e);
  };

  return (
    <div className={s.container}>
      <img className={s.img} src={avatarURL} alt="avatar" />
      <form onClick={onSubmit} id="upload-container" method="POST" action="send.php">
        <input id="file-input" type="file" name="file" multiple />
        <label for="file-input">Выберите файл</label>
        <button className={s.button} type="submit">
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
