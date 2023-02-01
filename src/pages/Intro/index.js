import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Button from '../../components/Button';
import '../style.scss';

function Intro() {
  return (
    <>
      <div className='block__inputs' >
        <h1>Click Next Button</h1>
      </div>
      <div className='block__buttons block__buttons__step-1' >
        <Link to='/step-1' >
          <Button txt='Next' buttonState='active' />
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Intro;