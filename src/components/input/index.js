import PropTypes from 'prop-types';
import s from './style.module.css';

const Input = ({ disabled = false, name = 'email', value = 'text', setValue, type, style }) => {
  return (
    <div className={s.container}>
      <b className={s.text}>{name}:</b>
      <input
        type={type}
        name={name}
        value={value}
        style={style}
        disabled={disabled}
        onChange={setValue}
        className={s.input}
      ></input>
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
  setValue: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};
