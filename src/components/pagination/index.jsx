import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pageSel, limitSel } from '../../redux/pagination/selectors';
import { totalSel } from '../../redux/contacts/contacts-selectors';
import { incrementPage, decrementPage, updatePage } from '../../redux/pagination/slice';

import s from './style.module.css';

export default function Pagination() {
  const currentPage = useSelector(pageSel);
  const limit = useSelector(limitSel);
  const total = useSelector(totalSel);
  const dispatch = useDispatch();

  if (!total) {
    return;
  }
  console.log(total);
  const lastPage = Math.ceil(total / limit);

  const buttonOne = 1;
  const buttonTwo = buttonOne + 1;
  const buttonThree = currentPage;
  const buttonFour = lastPage - 1;
  const buttonLast = lastPage;

  const disabledINC = buttonLast <= currentPage;
  const disabledDEC = currentPage === 1;

  const highlightСurrentPage = page => {
    if (currentPage === page) {
      return { backgroundColor: ' rgb(216, 93, 31)' };
    }
    return {};
  };

  return (
    <div className={s.container}>
      <button disabled={disabledDEC} className={s.button} onClick={() => dispatch(decrementPage())}>
        &#10094;
      </button>

      <button
        className={s.button}
        style={highlightСurrentPage(buttonOne)}
        onClick={() => dispatch(updatePage(buttonOne))}
      >
        {buttonOne}
      </button>

      {buttonTwo >= currentPage && limit < total && (
        <button
          className={s.button}
          style={highlightСurrentPage(buttonTwo)}
          onClick={() => dispatch(updatePage(buttonTwo))}
        >
          {buttonTwo}
        </button>
      )}

      {currentPage > buttonTwo && currentPage !== buttonTwo && <b>...</b>}
      {currentPage > buttonTwo && currentPage !== buttonLast && currentPage < buttonFour && (
        <button
          className={s.button}
          style={highlightСurrentPage(buttonThree)}
          onClick={() => dispatch(updatePage(buttonThree))}
        >
          {buttonThree}
        </button>
      )}

      {currentPage < buttonFour && currentPage !== buttonFour && <b>...</b>}
      {currentPage >= buttonFour && buttonFour > buttonTwo && (
        <button
          className={s.button}
          style={highlightСurrentPage(buttonFour)}
          onClick={() => dispatch(updatePage(buttonFour))}
        >
          {buttonFour}
        </button>
      )}

      {buttonLast !== buttonOne && buttonLast !== buttonTwo && (
        <button
          className={s.button}
          style={highlightСurrentPage(buttonLast)}
          onClick={() => dispatch(updatePage(buttonLast))}
        >
          {buttonLast}
        </button>
      )}

      <button disabled={disabledINC} className={s.button} onClick={() => dispatch(incrementPage())}>
        &#10095;
      </button>
    </div>
  );
}
