import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = () => {
    dispatch(sessionActions.logout());
  };

  return (
    <div className="dropdown">
      <i className="fa-regular fa-user profileButton" onClick={openMenu} />

      {showMenu && (
        <div className="profile-dropdown">
          <div>{user.username}</div>
          <div>{user.email}</div>
          <button onClick={logout}>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
