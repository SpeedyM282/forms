import React, { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { createUserLocalStorage } from '../../utils';
import Button from '../../components/Button';
import '../style.scss';

function Intro() {
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(createUserLocalStorage()));
  }, []);

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