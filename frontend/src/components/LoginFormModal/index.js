import React, { useState } from 'react';
import { LoginModal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({ name }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='modal-container'>
      <div className='navlinks log' onClick={() => setShowModal(true)}>{ name }</div>
      {showModal && (
        <LoginModal onClose={() => setShowModal(false)}>
          <LoginForm />
          <p style={{'fontSize':'14px'}}>Not registered? Create an account</p>
        </LoginModal>
      )}
    </div>
  );
}

export default LoginFormModal;
