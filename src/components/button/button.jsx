import PropTypes from 'prop-types';
import s from './style.module.css';

const Buttton = ({ text, onClick, disabled = false, type = 'button' }) => {
  return (
    <button type={type} disabled={disabled} className={s.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Buttton;

Buttton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};
