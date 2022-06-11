import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contact-operations';
import { loadingDelete } from 'redux/contacts/contacts-selectors';
import s from './contacts.module.css';
import { useState } from 'react';

export default function ContactCard({ card, index }) {
  const [currentBtnId, setCurrentBtnId] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector(loadingDelete);

  const { name, number, id } = card;
  const numberEl = index + 1;

  return (
    <li className={s.item}>
      <span className={s.number}>{numberEl}</span>
      <span>
        <b className={s.text}>name:</b> {name}
      </span>
      <span>
        <b className={s.text}>tel:</b>
        {number}
      </span>
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
