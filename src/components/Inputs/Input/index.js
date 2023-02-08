import React, { useState } from 'react';
import Checkbox from '../../Checkbox';
import './style.scss';

function Input({ label, type, min, max, status, value, onChange, field }) {
  const [inputType, setInputType] = useState('password');

  function toggleType() {
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
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
          type={type === 'password' ? inputType : type}
          min={min}
          max={max}
          autoComplete="new-password"
          disabled={status === 'disabled'}
          required
        />
        {
          type === 'password' &&
          <Checkbox label='Show Password' onClick={toggleType} />
        }
      </label>
    </>
  )
}

export default Input;