import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pageSel, limitSel } from '../../redux/pagination/selectors';
import { totalSel } from '../../redux/contacts/contacts-selectors';
import {
  incrementPage,
  decrementPage,
} from '../../redux/pagination/slice';

import s from './style.module.css';

export default function Pagination() {
  const currentPage = useSelector(pageSel);
  const limit = useSelector(limitSel);
  const total = useSelector(totalSel);
  const dispatch = useDispatch();
  console.log(total);
  if (!total) {
    return;
  }

  const lastPage = Math.round(total / limit);
  const buttonOne = currentPage;
  // const buttonTwo = buttonOne + 1;
  // const buttonThree = buttonTwo + 1;
  const buttonFour = lastPage;

  const disabledINC = buttonFour <= currentPage;
  const disabledDEC = currentPage === 1;

  return (
    <div className={s.container}>
      <button
        disabled={disabledDEC}
        className={s.button}
        onClick={() => dispatch(decrementPage())}
      >
        &#10094;
      </button>
      <button className={s.button}>{buttonOne}</button>
      {/* <button className={s.button}>{buttonTwo}</button>
      <button className={s.button}>{buttonThree}</button> */}
      <div className={s.button}>...</div>
      <button className={s.button}>{buttonFour}</button>
      <button
        disabled={disabledINC}
        className={s.button}
        onClick={() => dispatch(incrementPage())}
      >
        &#10095;
      </button>
    </div>
  );
}
