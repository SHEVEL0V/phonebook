import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { repitSendMail } from 'redux/user/user-operations';
import s from './style.module.css';

export default function MailRepit() {
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState(false);
  const dispatch = useDispatch();
  const sendMail = () => {
    if (email) {
      dispatch(repitSendMail(email));
    }
  };
  return (
    <div className={s.container}>
      Repite send mail auntefikations:
      <button
        className={s.button}
        type="button"
        onClick={() => (status ? sendMail() : setStatus(!status))}
      >
        {status ? 'send' : 'open'}
      </button>
      {status && (
        <input
          className={s.input}
          placeholder=" email"
          type="email"
          onChange={e => setEmail(e.target.value)}
        ></input>
      )}
    </div>
  );
}
