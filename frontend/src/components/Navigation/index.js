import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal/>
        <NavLink className='navlinks sign' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className='navbar'>
      <img className='icon' src={require('../../files/insideIcon.png')} alt='icon' height='100px' />
      <li className='navlist'>
        <NavLink className='navlinks home' exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
