import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addValueFilter } from 'redux/filter/filter-action';
import s from './filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filterValue);

  const setValue = e => {
    const value = e.target.value;
    dispatch(addValueFilter(value));
  };
  return (
    <div className={s.thamb}>
      <label>
        <p className={s.text}>Find contacts by name:</p>
        <input
          className={s.input}
          tyte="text"
          name="filter"
          onChange={setValue}
          value={value}
        ></input>
      </label>
    </div>
  );
}
