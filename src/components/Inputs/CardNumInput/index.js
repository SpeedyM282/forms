import React from 'react';
import { useState } from 'react';
import './style.scss';

function CardNumInput({ label, type }) {
  const [value, setValue] = useState('');

  const handleChange = event => {
    const result = event.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    setValue(result);
  };

  return (
    <>
      <label className='form__label' >
        {label}:
        <input
          className='form__input--card-num'
          maxLength={19}
          type={type}
          name="card-num"
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    </>
  )
}

export default CardNumInput;