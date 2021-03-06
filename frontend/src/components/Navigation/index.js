import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignupFormModal from '../SignupFormModal';
import UploadButton from './UploadButton';
import DemoUser from './DemoUser';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <UploadButton />
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal name={'Login'}/>
        <DemoUser />
        <SignupFormModal />
      </>
    );
  }

  return (
    <ul className='navbar'>
      <NavLink to='/'>
        <img className='icon' src={require('../../files/insideIcon.png')} alt='icon' height='85px'/>
      </NavLink>
      <li className='navlist'>
        <NavLink className='navlinks home' exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
