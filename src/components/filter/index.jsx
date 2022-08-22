import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { favoriteFilter } from 'redux/filter/selectors';
import { updateFavorite } from 'redux/filter/slise';
import { limitSel } from 'redux/pagination/selectors';
import { updateLimit } from 'redux/pagination/slice';

import s from './style.module.css';

export default function Filter() {
  const favorite = useSelector(favoriteFilter);
  const limit = useSelector(limitSel);
  const dispatch = useDispatch();

  const optionsLimit = [
    { value: 2, label: '2' },
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 15, label: '15' },
    { value: 20, label: '20' },
  ];

  const defaultValueFavorite = () => {
    return optionsLimit.find(el => el.value === limit);
  };

  return (
    <div className={s.thamb}>
      <h3 className={s.text}>Filter contacts:</h3>
      <label className={s.itemFilter}>
        Option favorite -
        <input
          className={s.checkbox}
          type="checkbox"
          value={favorite}
          onClick={() => dispatch(updateFavorite(!favorite))}
        ></input>
      </label>
      <div className={s.itemFilter}>
        <b>Limit</b>
        <Select
          className={s.select}
          options={optionsLimit}
          value={defaultValueFavorite()}
          onChange={({ value }) => {
            dispatch(updateLimit(value));
          }}
        />
      </div>
    </div>
  );
}
