import React, { useState, useContext, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Context } from '../../Context';
import { YEAR, MONTH } from '../../utils';
import Button from '../../components/Button';
import Input from '../../components/Inputs/Input';
import CardNumInput from '../../components/Inputs/CardNumInput';
import '../style.scss';

function Step4() {
  const [buttonState, setButtonState] = useState(false);
  const { cardInfo, updateCardInfo } = useContext(Context);
  const { cardOwner, cardNumber, cardExpDate } = cardInfo;

  useEffect(() => {
    if (cardOwner.length > 3 && cardNumber.length === 19 && cardExpDate) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [cardOwner, cardNumber, cardExpDate])

  return (
    <>
      <div className='block__inputs block__inputs__step-3-4' >
        <Input
          label='Owner Name'
          type='text'
          onChange={updateCardInfo}
          field='cardOwner'
          value={cardOwner}
        />
        <CardNumInput
          onChange={updateCardInfo}
          field='cardNumber'
          value={cardNumber}
        />
        <Input
          label='Expiration Date'
          type='month'
          min={`${YEAR}-${MONTH < 10 ? '0' + (Number(MONTH) + 2) : MONTH}`}
          value={cardExpDate}
          onChange={updateCardInfo}
          field='cardExpDate'
        />
      </div>

      <div className='block__buttons' >
        <Link to='/step-3' >
          <Button txt='Previous' buttonState='active' />
        </Link>
        <Link to={buttonState ? '/step-5' : '#'} style={{ 'cursor': buttonState ? 'pointer' : 'not-allowed' }} >
          <Button txt='Next' buttonState={buttonState} />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Step4;