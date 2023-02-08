import React from 'react';
import './style.scss';

function Button({ txt, buttonState, onClick }) {
  return (
    <>
      <button
        className={`button ${buttonState ? 'active' : 'disabled'}`}
        onClick={onClick}
      >
        {txt}
      </button>
    </>
  )
}

export default Button;