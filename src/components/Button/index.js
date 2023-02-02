import React from 'react';
import './style.scss';

function Button({ txt, buttonState }) {
  return (
    <>
      <button className={`button ${buttonState ? 'active' : 'disabled'}`}>{txt}</button>
    </>
  )
}

export default Button;