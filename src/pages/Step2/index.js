import React, { useState, useContext, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Context } from '../../Context';
import { cardStatusGenerator, linkStyle, USER_LOCAL_STORAGE } from '../../utils';
import Card from '../../components/Card';
import Button from '../../components/Button';
import '../style.scss';

function Step2() {
  const [buttonState, setButtonState] = useState(false);
  const [status, setStatus] = useState(cardStatusGenerator());
  const { subscription, updateSubscription } = useContext(Context);

  function handleClick() {
    USER_LOCAL_STORAGE.subscription = subscription;
    localStorage.setItem('user', JSON.stringify(USER_LOCAL_STORAGE));
  }

  useEffect(() => {
    if (subscription) {
      setStatus(cardStatusGenerator());
      setStatus(prev => ({ ...prev, [subscription]: true }));
      setButtonState(true);
    }
  }, [subscription]);

  return (
    <>
      <div className='block__cards' >
        <Card
          heading='Basic'
          cost='Free'
          onClick={updateSubscription}
          status={status.Basic}
        />
        <Card
          heading='Standard'
          cost='$2.50'
          period='month'
          onClick={updateSubscription}
          status={status.Standard}
        />
        <Card
          heading='Premium'
          cost='$20.0'
          period='year'
          onClick={updateSubscription}
          status={status.Premium}
        />
      </div>

      <div className='block__buttons'>
        <Link to='/step-1'>
          <Button txt='Previous' buttonState='active' />
        </Link>
        <Link to={linkStyle(buttonState, 3).link} style={linkStyle(buttonState).linkStyle} >
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

export default Step2;