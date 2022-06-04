import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDeleteContactsMutation } from 'redux/contacts-RTK';
import s from './contactsList.module.css';

export default function ContactCard({ card, index }) {
  const [deleteEl, { isLoading: isUpdating }] =
    useDeleteContactsMutation();
  const numberEl = index + 1;
  const { name, phone, id } = card;

  return (
    <li key={id} className={s.item}>
      <span className={s.number}>{numberEl}</span>
      <span>
        <b className={s.text}>name:</b> {name}{' '}
      </span>
      <span>
        <b className={s.text}>tel:</b>
        {phone}
      </span>
      <button
        className={s.button}
        type="button"
        onClick={() => deleteEl(id)}
      >
        {isUpdating ? <ClipLoader size={10} /> : <AiFillDelete />}
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
