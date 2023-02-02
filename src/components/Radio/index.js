import React from 'react';
import './style.scss';

function Radio({ label, field, onChange }) {
  return (
    <>
      <div className='form__radio__wrapper' >
        {label}:
        <input
          className='form__radio'
          type="radio"
          name='gender'
          onChange={() => onChange(field, true)}
          required
        /> Male
        <input
          className='form__radio'
          type="radio"
          name='gender'
          onChange={() => onChange(field, false)}
          required
        /> Female
      </div>
    </>
  )
}

export default Radio;