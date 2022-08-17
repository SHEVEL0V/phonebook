import { useSelector } from 'react-redux';
import { authentication } from 'redux/user/user-selectors';
import { useState } from 'react';
import Modal from 'components/modal';
import SignupForm from 'components/singnup-form';
import s from './style.module.css';
import { useEffect } from 'react';

export default function HomePge() {
  const [modal, setModal] = useState(false);
  const status = useSelector(authentication);
  const onModal = () => setModal(!modal);

  useEffect(() => {
    if (status) {
      setModal(false);
    }
  }, [status]);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Hello</h1>
      <div>
        {modal && (
          <Modal onClose={onModal}>
            <SignupForm onClose={onModal} />
          </Modal>
        )}
        <button className={s.button} onClick={() => setModal(true)}>
          <b>Signup</b>
        </button>
      </div>
    </div>
  );
}
