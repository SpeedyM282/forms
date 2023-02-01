import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from '../../components/Button';
import Input from '../../components/Input';
import '../style.scss';

function Step4() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 3;
  return (
    <>
      <div className='block__inputs block__inputs__step-3-4' >
        <Input label='Owner Name' type='text' />
        <Input label='Card Number' type='text' />
        <Input
          label='Expiration Date'
          type='month'
          min={`${year}-${month < 10 ? '0' + month : month}`}
        />
      </div>
      <div className='block__buttons' >
        <Link to='/step-3' >
          <Button txt='Previous' buttonState='active' />
        </Link>
        <Link to='/step-5' >
          <Button txt='Next' buttonState='active' />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Step4;