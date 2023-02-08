import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { USER_LOCAL_STORAGE } from '../../utils';
import Button from '../../components/Button';
import Input from '../../components/Inputs/Input';
import Checkbox from '../../components/Checkbox';
import '../style.scss';

function Step5() {
  const [buttonState, setButtonState] = useState(false);
  const [personalDataProcessing, setPersonalDataProcessing] = useState(false);
  const [cookies, setCookies] = useState(false);

  function updPersonalDataProcessing() {
    setPersonalDataProcessing(prev => !prev);
  }

  function updCookies() {
    setCookies(prev => !prev);
  }

  useEffect(() => {
    if (personalDataProcessing && cookies) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [personalDataProcessing, cookies]);

  return (
    <>
      <div className='block__inputs' >
        <Input
          label='Username'
          type='text'
          value={USER_LOCAL_STORAGE.userInfo.username}
          status='disabled'
        />
        <Input
          label='Email'
          type='email'
          value={USER_LOCAL_STORAGE.userInfo.email}
          status='disabled'
        />
        <Checkbox
          label='By checking it I confirm my personal data processing'
          onClick={updPersonalDataProcessing}
        />
        <Checkbox
          label='I accept all cookies'
          onClick={updCookies}
        />
      </div>
      <div className='block__buttons' >
        <Link to='/step-4' >
          <Button txt='Previous' buttonState='active' />
        </Link>
        <Link to={buttonState ? '/step-6' : '#'} style={{ 'cursor': buttonState ? 'pointer' : 'not-allowed' }} >
          <Button txt='Next' buttonState={buttonState} />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Step5;