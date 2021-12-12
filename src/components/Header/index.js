import React from 'react';
import coverImage from '../../assets/cover/binary-code-6109177.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Lernantino</h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
