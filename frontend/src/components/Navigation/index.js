import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
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
      <li className='navlist'>
        <NavLink className='navlinks log' to="/login">Log In</NavLink>
      </li>
      <li className='navlist'>
        <NavLink className='navlinks sign' to="/signup">Sign Up</NavLink>
      </li>
      </>
    );
  }

  return (
    <ul className='navbar'>
      <li className='navlist'>
        <NavLink className='navlinks home' exact to="/">Home</NavLink>
      </li>
        {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;
