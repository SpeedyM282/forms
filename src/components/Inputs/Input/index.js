import React, { useState, useContext } from 'react';
import Checkbox from '../../Checkbox';
import './style.scss';

function Input({ label, type, min, max, status, value, onChange, field }) {
  const [passwordType, setPasswordType] = useState('password');

  function togglePassword() {
    if (passwordType === 'password') {
      setPasswordType('text')
    } else {
      setPasswordType('password')
    }
  }

  return (
    <>
      <label className='form__label' >
        {label}:
        <input
          className='form__input'
          value={value}
          onChange={(e) => onChange(field, e.target.value)}
          type={type === 'password' ? passwordType : type}
          min={min}
          max={max}
          autoComplete="new-password"
          disabled={status === 'disabled'}
          required
        />
        {
          type === 'password' &&
          <Checkbox label='Show Password' onClick={togglePassword} />
        }
      </label>
    </>
  )
}

export default Input;