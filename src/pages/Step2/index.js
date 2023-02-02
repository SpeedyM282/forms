import React, { useState, useContext, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Context } from '../../Context';
import { cardStatusGenerator } from '../../utils';
import Card from '../../components/Card';
import Button from '../../components/Button';
import '../style.scss';

function Step2() {
  const [buttonState, setButtonState] = useState(false);
  const [status, setStatus] = useState(cardStatusGenerator());
  const { subscription, updateSubscription } = useContext(Context);

  useEffect(() => {
    if (subscription) {
      setStatus(cardStatusGenerator());
      setStatus(prev => ({ ...prev, [subscription]: true }));
      setButtonState(true);
    }
  }, [subscription])

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
        <Link to={buttonState ? '/step-3' : '#'} style={{ 'cursor': buttonState ? 'pointer' : 'not-allowed' }} >
          <Button txt='Next' buttonState={buttonState} />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Step2;