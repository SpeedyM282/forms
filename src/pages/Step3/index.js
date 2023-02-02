import React, { useState, useContext, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Context } from '../../Context';
import { YEAR, MONTH, DATE } from '../../utils';
import Button from '../../components/Button';
import Input from '../../components/Inputs/Input';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';
import '../style.scss';

function Step3() {
  const [buttonState, setButtonState] = useState(false);
  const { userData, updateUserData, ageConfirm, updateAgeConfirm } = useContext(Context);
  const { firstName, lastName, birthDate, email, gender } = userData;

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  useEffect(() => {
    if (firstName && lastName && birthDate && validateEmail(email) && (gender !== null) && ageConfirm) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [firstName, lastName, birthDate, email, gender, ageConfirm])

  return (
    <>
      <div className='block__inputs block__inputs__step-3-4' >
        <Input
          label='First Name'
          type='text'
          value={firstName}
          onChange={updateUserData}
          field='firstName'
        />
        <Input
          label='Last Name'
          type='text'
          value={lastName}
          onChange={updateUserData}
          field='lastName'
        />
        <Input
          label='Birthdate'
          type='date'
          max={`${YEAR - 18}-${MONTH}-${DATE}`}
          value={birthDate}
          onChange={updateUserData}
          field='birthDate'
        />
        <Input
          label='Email'
          type='email'
          value={email}
          onChange={updateUserData}
          field='email'
        />
        <div className='block__inputs' >
          <Radio label='Gender' onChange={updateUserData} field='gender' />
          <Checkbox label="I'm 18 years old or older" onClick={updateAgeConfirm} />
        </div>
      </div>

      <div className='block__buttons' >
        <Link to='/step-2'>
          <Button txt='Previous' buttonState='active' />
        </Link>
        <Link to={buttonState ? '/step-4' : '#'} style={{ 'cursor': buttonState ? 'pointer' : 'not-allowed' }} >
          <Button txt='Next' buttonState={buttonState} />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Step3;