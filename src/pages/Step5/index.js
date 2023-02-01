import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import '../style.scss';

function Step5() {
  return (
    <>
      <div className='block__inputs' >
        <Input label='Username' type='text' status='disabled' />
        <Input label='Email' type='email' status='disabled' />
        <Checkbox label='By checking it I confirm my personal data processing' />
        <Checkbox label='I accept all cookies' />
      </div>
      <div className='block__buttons' >
        <Link to='/step-4' >
          <Button txt='Previous' buttonState='active' />
        </Link>
        <Link to='/step-6' >
          <Button txt='Next' buttonState='active' />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Step5;