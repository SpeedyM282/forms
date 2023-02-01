import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from '../../components/Button';
import Input from '../../components/Input';
import '../style.scss';

function Step6() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 3;
  return (
    <>
      <div className='block__inputs block__inputs__step-3-4 block__step-6' >
        <div className='block__personal-data-info'>
          <h2 className='steps--heading' >Personal info</h2>
          <Input label='First Name' type='text' />
          <Input label='Last Name' type='text' />
          <Input label='Birthdate' type='date' />
          <Input label='Email' type='email' />
        </div>
        <div className='block__credit-card-info'>
          <h2 className='steps--heading' >Credit card info</h2>
          <Input label='Owner Name' type='text' />
          <Input label='Card Number' type='text' />
          <Input
            label='Expiration Date'
            type='month'
            min={`${year}-${month < 10 ? '0' + month : month}`}
          />
        </div>
      </div>
      <div className='block__buttons' >
        <Link to='/step-5' >
          <Button txt='Previous' buttonState='active' />
        </Link>
        <Link to='/' >
          <Button txt='Submit' buttonState='active' />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Step6;