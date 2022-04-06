import React, { useState } from 'react';
import { LoginModal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({ name }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='navlinks log' onClick={() => setShowModal(true)}>{ name }</div>
      {showModal && (
        <LoginModal onClose={() => setShowModal(false)}>
          <LoginForm />
        </LoginModal>
      )}
    </>
  );
}

export default LoginFormModal;
