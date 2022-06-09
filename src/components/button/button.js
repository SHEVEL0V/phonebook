import s from './button.module.css';

export default function Button({ children, ...props }) {
  return (
    <button className={s.button} {...props} type="button">
      {children}
    </button>
  );
}
