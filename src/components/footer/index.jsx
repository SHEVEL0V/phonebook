import { AiFillGithub } from 'react-icons/ai';
import s from './style.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <a className={s.link} href="https://github.com/SHEVEL0V/phonebook" target="blank">
        <AiFillGithub className={s.icon} />
        GitHab
      </a>
      <b>2022</b>
    </footer>
  );
}
