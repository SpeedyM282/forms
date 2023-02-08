import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { USER_LOCAL_STORAGE } from '../../utils';
import Button from '../../components/Button';
import CardNumInput from '../../components/Inputs/CardNumInput';
import Input from '../../components/Inputs/Input';
import '../style.scss';

function Step6() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 3;

  return (
    <>
      <div className='block__inputs block__inputs__step-3-4 block__step-6' >
        <div className='block__personal-data-info'>
          <h2 className='steps--heading' >Personal info</h2>
          <Input
            label='First Name'
            type='text'
            status='disabled'
            value={USER_LOCAL_STORAGE.userInfo.firstName}
          />
          <Input
            label='Last Name'
            type='text'
            status='disabled'
            value={USER_LOCAL_STORAGE.userInfo.lastName}
          />
          <Input
            label='Birthdate'
            type='date'
            status='disabled'
            value={USER_LOCAL_STORAGE.userInfo.birthDate}
          />
          <Input
            label='Email'
            type='email'
            status='disabled'
            value={USER_LOCAL_STORAGE.userInfo.email}
          />
        </div>
        <div className='block__credit-card-info'>
          <h2 className='steps--heading' >Credit card info</h2>
          <Input
            label='Owner Name'
            type='text'
            status='disabled'
            value={USER_LOCAL_STORAGE.cardInfo.cardOwner}
          />
          <CardNumInput
            label='Card Number'
            type='text'
            status='disabled'
            value={USER_LOCAL_STORAGE.cardInfo.cardNumber}
          />
          <Input
            label='Expiration Date'
            type='month'
            min={`${year}-${month < 10 ? '0' + month : month}`}
            status='disabled'
            value={USER_LOCAL_STORAGE.cardInfo.cardExpDate}
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