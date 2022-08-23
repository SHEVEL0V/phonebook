import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector, useDispatch } from 'react-redux';
import { responseSel, dataSel } from 'redux/contacts/contacts-selectors';
import { getContact } from 'redux/contacts/contact-operations';
import { authentication } from 'redux/user/user-selectors';
import { limitSel, pageSel } from 'redux/pagination/selectors';
import { favoriteFilter } from 'redux/filter/selectors';
import ContactCard from './card';
import Pagination from 'components/pagination';
import s from './style.module.css';

export default function ContactsList() {
  const response = useSelector(responseSel);

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

  if (false) {
    return (
      <div className={s.loader}>
        <ClipLoader />
      </div>
    );
  }

  return (
    <div className={s.container}>
      <ul>{contacts ? contacts.map(el => <ContactCard key={el._id} card={el} />) : []}</ul>
      <Pagination />
    </div>
  );
}
