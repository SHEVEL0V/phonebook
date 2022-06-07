import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contact-operations';
import s from './contactsList.module.css';

export default function ContactCard({ card, index }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contacts.loading);
  const numberEl = index + 1;
  const { name, number, id } = card;

  console.log('card');

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
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        {loading ? <ClipLoader size={10} /> : <AiFillDelete />}
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
