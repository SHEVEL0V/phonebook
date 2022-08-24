import PropTypes from 'prop-types';
import { AiFillDelete, AiFillStar } from 'react-icons/ai';
import ClipLoader from 'react-spinners/ClipLoader';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, addStatusFavorite } from 'redux/contacts/contact-operations';
import {
  loadingDeleteSel,
  loadingStatusSel,
  loadingGetSel,
} from 'redux/contacts/contacts-selectors';
import s from './style.module.css';

const ContactCard = ({ card }) => {
  const loadingGet = useSelector(loadingGetSel);
  const loadingDelete = useSelector(loadingDeleteSel);
  const loadingStatus = useSelector(loadingStatusSel);
  const [currentBtnId, setCurrentBtnId] = useState(null);
  const dispatch = useDispatch();

  const isloadingStatus = loadingGet || loadingStatus;
  const isloadingDelete = loadingGet || loadingDelete;

  const { name, phone, _id: id, email, favorite } = card;

  return (
    <li className={s.item}>
      <button
        className={s.favorite}
        id={id}
        style={favorite ? { backgroundColor: ' rgb(19, 173, 80)' } : {}}
        onClick={e => {
          setCurrentBtnId(e.currentTarget.id);
          dispatch(addStatusFavorite({ id, favorite: !favorite }));
        }}
      >
        {isloadingStatus && currentBtnId === id ? <ClipLoader size={10} /> : <AiFillStar />}
      </button>
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
        {isloadingDelete && currentBtnId === id ? <ClipLoader size={10} /> : <AiFillDelete />}
      </button>
    </li>
  );
};

export default memo(ContactCard);

ContactCard.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
