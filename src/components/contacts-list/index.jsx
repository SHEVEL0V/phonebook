import { useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import { responseSel, dataSel, loadingGetSel } from 'redux/contacts/contacts-selectors';
import { getContact } from 'redux/contacts/contact-operations';
import { authentication } from 'redux/user/user-selectors';
import { limitSel, pageSel } from 'redux/pagination/selectors';
import { favoriteFilter } from 'redux/filter/selectors';
import ContactCard from './card';
import Pagination from 'components/pagination';
import s from './style.module.css';

export default function ContactsList() {
  const response = useSelector(responseSel);
  const loadingGet = useSelector(loadingGetSel);

  const { contacts } = useSelector(dataSel);
  const status = useSelector(authentication);
  const limit = useSelector(limitSel);
  const page = useSelector(pageSel);

  const favorite = useSelector(favoriteFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      dispatch(getContact({ limit, page, favorite }));
    }
  }, [dispatch, status, favorite, limit, page, response]);

  return (
    <div className={s.container}>
      <div className={s.spiner}>{loadingGet && <BeatLoader color={'rgb(41, 41, 204)'} />}</div>

      <ul>{contacts ? contacts.map(el => <ContactCard key={el._id} card={el} />) : []}</ul>
      {contacts && <Pagination />}
    </div>
  );
}
