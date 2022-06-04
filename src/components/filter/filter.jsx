import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addValueFilter } from 'redux/contacts-action';
import s from './filter.module.css';

export default function Filter() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addValueFilter(value.trim()));
  }, [dispatch, value]);

  return (
    <div className={s.thamb}>
      <label>
        <p className={s.text}>Find contacts by name:</p>
        <input
          className={s.input}
          tyte="text"
          name="filter"
          onChange={e => setValue(e.target.value)}
          value={value}
        ></input>
      </label>
    </div>
  );
}
