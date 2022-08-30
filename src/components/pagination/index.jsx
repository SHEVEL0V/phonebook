import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pageSel, limitSel } from '../../redux/pagination/selectors';
import { totalSel } from '../../redux/contacts/contacts-selectors';
import { incrementPage, decrementPage, updatePage } from '../../redux/pagination/slice';

import s from './style.module.css';

export default function Pagination() {
  const dispatch = useDispatch();
  const limit = useSelector(limitSel);
  const total = useSelector(totalSel);

  const currentPage = useSelector(pageSel);
  const lastPage = total ? Math.ceil(total / limit) : null;
  const pageOne = 1;
  const pageTwo = pageOne + 1;
  const pageFour = lastPage - 1;

  const buttonTwo = pageTwo >= currentPage && limit < total;
  const buttonThree = currentPage > pageTwo && currentPage !== lastPage && currentPage < pageFour;
  const buttonFour = currentPage >= pageFour && pageFour > pageTwo;
  const buttonLast = lastPage > pageTwo;

  const pointBefor = currentPage > pageTwo && currentPage !== pageTwo && currentPage !== pageOne;
  const pointAfter = currentPage < pageFour && currentPage !== pageFour && currentPage !== pageOne;

  const disabledINC = lastPage <= currentPage;
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
        style={highlightСurrentPage(pageOne)}
        onClick={() => dispatch(updatePage(pageOne))}
      >
        {pageOne}
      </button>

      {buttonTwo && (
        <button
          className={s.button}
          style={highlightСurrentPage(pageTwo)}
          onClick={() => dispatch(updatePage(pageTwo))}
        >
          {pageTwo}
        </button>
      )}

      {pointBefor && <b>...</b>}
      {buttonThree && (
        <button
          className={s.button}
          style={highlightСurrentPage(currentPage)}
          onClick={() => dispatch(updatePage(currentPage))}
        >
          {currentPage}
        </button>
      )}

      {pointAfter && <b>...</b>}
      {buttonFour && (
        <button
          className={s.button}
          style={highlightСurrentPage(pageFour)}
          onClick={() => dispatch(updatePage(pageFour))}
        >
          {pageFour}
        </button>
      )}

      {buttonLast && (
        <button
          className={s.button}
          style={highlightСurrentPage(lastPage)}
          onClick={() => dispatch(updatePage(lastPage))}
        >
          {lastPage}
        </button>
      )}

      <button disabled={disabledINC} className={s.button} onClick={() => dispatch(incrementPage())}>
        &#10095;
      </button>
    </div>
  );
}
