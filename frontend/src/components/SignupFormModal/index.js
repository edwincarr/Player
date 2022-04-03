import React, { useState } from 'react';
import { SignupModal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='navlinks log' onClick={() => setShowModal(true)}>Sign up</div>
      {showModal && (
        <SignupModal onClose={() => setShowModal(false)}>
          <SignupForm />
        </SignupModal>
      )}
    </>
  );
}

export default SignupFormModal;
