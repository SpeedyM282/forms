import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';
import '../style.scss';

function Step3() {
  return (
    <>
      <div className='block__inputs block__inputs__step-3-4' >
        <Input label='First Name' type='text' />
        <Input label='Last Name' type='text' />
        <Input label='Birthdate' type='date' />
        <Input label='Email' type='email' />
        <div className='block__inputs' >
          <Radio label='Gender' />
          <Checkbox label="I'm 18 years old or older" />
        </div>
      </div>
      <div className='block__buttons' >
        <Link to='/step-2' >
          <Button txt='Previous' buttonState='active' />
        </Link>
        <Link to='/step-4' >
          <Button txt='Next' buttonState='active' />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Step3;