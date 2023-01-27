import { useState } from 'react';
import './style.scss';

function Input({ label, type, min, status }) {
  const [passwordType, setPasswordType] = useState('password');
  const [value, setValue] = useState('');

  const handleChange = event => {
    const result = event.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();

    setValue(result);
  };

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
        {
          label === 'Card Number' ?
            <input
              className='form__input form__input--card-num'
              maxLength={19}
              type={type}
              name="card-num"
              value={value}
              onChange={handleChange}
              required
            />
            :
            <input
              className='form__input'
              type={type === 'password' ? passwordType : type}
              min={min}
              autoComplete="new-password"
              required
            />
        }
        {
          type === 'password' &&
          <div className='form__checkbox--wrapper'>
            <input
              className='form__checkbox'
              type="checkbox"
              onClick={togglePassword}
            />Show Password
          </div>
        }
      </label>
    </>
  )
}

export default Input;