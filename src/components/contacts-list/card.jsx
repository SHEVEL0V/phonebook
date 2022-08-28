import PropTypes from 'prop-types';
import { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AiFillDelete, AiFillStar, AiFillSetting, AiFillSave } from 'react-icons/ai';
import ClipLoader from 'react-spinners/ClipLoader';
import Input from 'components/input';
import ButttonRoad from 'components/button/buttonRoad';

import { deleteContact, updateContact, addStatusFavorite } from 'redux/contacts/contact-operations';
import {
  loadingDeleteSel,
  loadingStatusSel,
  loadingUpdateSel,
  errorUpdateSel,
  idSel,
} from 'redux/contacts/contacts-selectors';
import { updateId } from 'redux/contacts/contacts-slice';

import s from './style.module.css';

const ContactCard = ({ card }) => {
  const { name, phone, _id: id, email, favorite } = card;

  const [valueName, setValueName] = useState(name);
  const [valuePhone, setValuePhone] = useState(phone);
  const [valueEmail, setValueEmail] = useState(email);

  const [disabledInp, setDisabledInp] = useState(true);

  const currentId = useSelector(idSel);
  const loadingUpdate = useSelector(loadingUpdateSel);
  const loadingDelete = useSelector(loadingDeleteSel);
  const loadingStatus = useSelector(loadingStatusSel);
  const error = useSelector(errorUpdateSel);

  const disabledBtn = loadingDelete || loadingStatus || loadingUpdate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setValuePhone(phone);
      setValueName(name);
      setValueEmail(email);
    }
  }, [email, error, name, phone, valueEmail]);

  const onClickUpdateSt = e => {
    dispatch(updateId(e.currentTarget.id));
    dispatch(addStatusFavorite({ id, favorite: !favorite }));
  };

  const onClickUpdateContact = e => {
    dispatch(updateId(e.currentTarget.id));
    setDisabledInp(!disabledInp);
    const contact = { name: valueName, phone: valuePhone, email: valueEmail };
    if (name !== valueName || phone !== valuePhone || email !== valueEmail)
      dispatch(updateContact({ id, contact }));
  };

  const onClickDelete = e => {
    dispatch(updateId(e.currentTarget.id));
    dispatch(deleteContact(id));
  };

  const IconFavorite = () =>
    loadingStatus && currentId === id ? <ClipLoader size={10} /> : <AiFillStar />;

  const IconButtonUpdate = () => {
    const Icon = () => (disabledInp ? <AiFillSetting /> : <AiFillSave />);
    return loadingUpdate && currentId === id ? <ClipLoader size={10} /> : <Icon />;
  };

  const IconButtonDelete = () =>
    loadingDelete && currentId === id ? <ClipLoader size={10} /> : <AiFillDelete />;

  return (
    <li className={s.item}>
      <ButttonRoad
        id={id}
        onClick={onClickUpdateSt}
        disabled={disabledBtn}
        style={favorite ? { backgroundColor: ' rgb(19, 173, 80, 0.643)' } : {}}
      >
        <IconFavorite />
      </ButttonRoad>

      <div className={s.container}>
        <Input
          tupe="name"
          style={!disabledInp ? { backgroundColor: 'rgba(44, 120, 220, 0.344)' } : {}}
          disabled={disabledInp}
          name="name"
          value={valueName}
          setValue={e => setValueName(e.target.value)}
        />
        <Input
          type="phone"
          style={!disabledInp ? { backgroundColor: 'rgba(44, 120, 220, 0.344)' } : {}}
          disabled={disabledInp}
          name="phone"
          value={valuePhone}
          setValue={e => setValuePhone(e.target.value)}
        />
        <Input
          type="email"
          style={!disabledInp ? { backgroundColor: 'rgba(44, 120, 220, 0.344)' } : {}}
          disabled={disabledInp}
          name="email"
          value={valueEmail}
          setValue={e => setValueEmail(e.target.value)}
        />
      </div>
      <div>
        <ButttonRoad
          id={id}
          disabled={disabledBtn}
          onClick={onClickUpdateContact}
          style={!disabledInp ? { backgroundColor: ' rgb(236, 28, 28, 0.643)' } : {}}
        >
          <IconButtonUpdate />
        </ButttonRoad>
        <ButttonRoad id={id} disabled={disabledBtn} onClick={onClickDelete}>
          <IconButtonDelete />
        </ButttonRoad>
      </div>
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
