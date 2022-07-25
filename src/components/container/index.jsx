import PropTypes from 'prop-types';
import s from './style.module.css';

export default function Conteiner({ children }) {
  return <div className={s.container}>{children}</div>;
}

Conteiner.propTypes = { children: PropTypes.node.isRequired };
