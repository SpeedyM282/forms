import React, { useState, useContext, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Context } from '../../Context';
import { linkStyle, USER_LOCAL_STORAGE } from '../../utils';
import Button from '../../components/Button';
import Input from '../../components/Inputs/Input';
import '../style.scss';

function Step1() {
  const [buttonState, setButtonState] = useState(false);
  const { userData, updateUserData } = useContext(Context);
  const { username, password, confirmPassword } = userData;

  function handleClick() {
    USER_LOCAL_STORAGE.userInfo.username = username;
    USER_LOCAL_STORAGE.userInfo.password = password;
    localStorage.setItem('user', JSON.stringify(USER_LOCAL_STORAGE));
  }

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
        <Link to={linkStyle(buttonState, 2).link} style={linkStyle(buttonState).linkStyle} >
          <Button
            txt='Next'
            buttonState={buttonState}
            onClick={handleClick}
          />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Step1;