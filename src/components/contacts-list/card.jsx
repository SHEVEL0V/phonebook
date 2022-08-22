import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contact-operations';
import { loadingDelete } from 'redux/contacts/contacts-selectors';
import s from './style.module.css';
import { useState } from 'react';

export default function ContactCard({ card, index }) {
  const [currentBtnId, setCurrentBtnId] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector(loadingDelete);

  const { name, phone, _id: id, email, favorite } = card;
  const numberEl = index + 1;

  return (
    <li className={s.item}>
      <div className={s.number}>{numberEl}</div>
      <div className={s.container_tb}>
        <span className={s.tr}>
          <b className={s.text}>name:</b> {name}
        </span>
        <span className={s.tr}>
          <b className={s.text}>tel:</b>
          {phone}
        </span>
        <span className={s.tr}>
          <b className={s.text}>email:</b>
          {email}
        </span>
        <span className={s.tr}>
          <b className={s.text}>status:</b>
          {favorite ? <b> favorite</b> : '---'}
        </span>
      </div>
      <button
        className={s.button}
        id={id}
        type="button"
        onClick={e => {
          setCurrentBtnId(e.currentTarget.id);
          dispatch(deleteContact(id));
        }}
      >
        {loading && currentBtnId === id ? (
          <ClipLoader size={10} />
        ) : (
          <AiFillDelete />
        )}
      </button>
    </li>
  );
}

ContactCard.propTypes = {
  index: PropTypes.number.isRequired,
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
