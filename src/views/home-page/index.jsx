import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { authentication } from 'redux/user/user-selectors';

import Modal from 'components/modal';
import SignupForm from 'components/singnup-form';
import Buttton from 'components/button/button';

import s from './style.module.css';

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
        <Buttton text={'Signup'} onClick={() => setModal(true)} />
      </div>
    </div>
  );
}
