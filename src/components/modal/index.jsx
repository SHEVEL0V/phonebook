import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './style.module.css';

const modalRoot = document.querySelector('#root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDoun = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDoun);

    return () => {
      window.removeEventListener('keydown', handleKeyDoun);
    };
  }, [onClose]);

  // function handelBackdropClick(e) {
  //   if (e.currentTarget === e.target) {
  //     onClose();
  //   }}

  return createPortal(
    <div className={s.backdrop}>
      <div className={s.content}>{children}</div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
