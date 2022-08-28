import PropTypes from 'prop-types';
import s from './style.module.css';

const ButttonRoad = ({ id, children, onClick, disabled = false, type = 'button', style = {} }) => {
  return (
    <button
      id={id}
      type={type}
      style={style}
      disabled={disabled}
      className={s.buttonRoad}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButttonRoad;

ButttonRoad.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};
