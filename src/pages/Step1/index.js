import React, { useState, useContext, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Context } from '../../Context';
import Button from '../../components/Button';
import Input from '../../components/Inputs/Input';
import '../style.scss';

function Step1() {
  const [buttonState, setButtonState] = useState(false);
  const { userData, updateUserData } = useContext(Context)
  const { username, password, confirmPassword } = userData;

  useEffect(() => {
    if (password === confirmPassword && username.length > 3 && password.length > 5) {
      setButtonState(true);
    } else {
      setButtonState(false)
    }
  }, [username, password, confirmPassword]);

  return (
    <>
      <div className='block__inputs' >
        <Input
          label='Username'
          type='text'
          value={username}
          onChange={updateUserData}
          field='username'
        />
        <Input
          label='Password'
          type='password'
          value={password}
          onChange={updateUserData}
          field='password'
        />
        <Input
          label='Confirm Password'
          type='password'
          value={confirmPassword}
          onChange={updateUserData}
          field='confirmPassword'
        />
      </div>
      <div className='block__buttons block__buttons__step-1' >
        <Link to={buttonState ? '/step-2' : '#'} style={{ 'cursor': buttonState ? 'pointer' : 'not-allowed' }} >
          <Button txt='Next' buttonState={buttonState} />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Step1;