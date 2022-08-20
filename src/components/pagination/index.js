import s from './style.module.css';

export default function Pagination() {
  return (
    <div className={s.container}>
      <button className={s.button}>-</button>
      <button className={s.button}>1</button>
      <button className={s.button}>2</button>
      <button className={s.button}>3</button>
      <div className={s.button}>...</div>
      <button className={s.button}>4</button>
      <button className={s.button}>+</button>
    </div>
  );
}
