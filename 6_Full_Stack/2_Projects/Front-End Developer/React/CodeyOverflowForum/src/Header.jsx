import React from 'react';

function Header({profileImg, username}) {
  return (
    <>
      <img src={profileImg} alt={username} />
      <h1>{username}</h1>
    </>
  )
}

export default Header;