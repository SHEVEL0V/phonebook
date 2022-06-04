import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGetContactsQuery } from 'redux/contacts-RTK';
import ContactCard from './contactCard';
import s from './contactsList.module.css';

export default function ContactsList() {
  const { currentData, isLoading } = useGetContactsQuery('');
  const filter = useSelector(state => state.filterValue);

  if (isLoading) {
    return (
      <div className={s.loader}>
        <ClipLoader />
      </div>
    );
  }

  if (currentData) {
    const filterList = currentData.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <div>
        <h2>Contacts:</h2>
        <ul>
          {filterList.map((el, inx) => (
            <ContactCard key={inx} card={el} index={inx} />
          ))}
        </ul>
      </div>
    );
  }
}
