import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector, useDispatch } from 'react-redux';
import { loadingFetch } from 'redux/contacts/contacts-selectors';
import { data } from 'redux/contacts/contacts-selectors';
import { getContact } from 'redux/contacts/contact-operations';
import { authentication } from 'redux/user/user-selectors';
import { limitSel, pageSel } from 'redux/pagination/selectors';
import { favoriteFilter } from 'redux/filter/selectors';
import ContactCard from './card';
import Pagination from 'components/pagination';
import s from './style.module.css';

export default function ContactsList() {
  const loading = useSelector(loadingFetch);
  const { contacts } = useSelector(data);
  const status = useSelector(authentication);
  const limit = useSelector(limitSel);
  const page = useSelector(pageSel);
  const favorite = useSelector(favoriteFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status) {
      dispatch(getContact({ limit, page, favorite }));
    }
  }, [dispatch, favorite, limit, page, status]);

  if (loading) {
    return (
      <div className={s.loader}>
        <ClipLoader />
      </div>
    );
  }

  return (
    <div className={s.container}>
      <ul>
        {contacts
          ? contacts.map((el, inx) => (
              <ContactCard key={el._id} card={el} index={inx} />
            ))
          : []}
      </ul>
      <Pagination />
    </div>
  );
}
