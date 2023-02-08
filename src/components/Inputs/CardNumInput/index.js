import React from 'react';
import './style.scss';

function CardNumInput({ value, onChange, field, status }) {
  const handleChange = event => {
    const result = event.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
    onChange(field, result)
  };

  return (
    <>
      <label className='form__label' >
        Card Number:
        <input
          className='form__input--card-num'
          maxLength={19}
          type='text'
          name="card-num"
          value={value}
          onChange={handleChange}
          disabled={status === 'disabled'}
          required
        />
      </label>
    </>
  )
}

export default CardNumInput;