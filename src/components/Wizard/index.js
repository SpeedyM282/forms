import React from 'react';
import { Routes, Route } from "react-router-dom";
import Intro from '../../pages/Intro';
import Step1 from '../../pages/Step1';
import Step2 from '../../pages/Step2';
import Step3 from '../../pages/Step3';
import Step4 from '../../pages/Step4';
import Step5 from '../../pages/Step5';
import Step6 from '../../pages/Step6';
import './style.scss';

function Wizard() {
  return (
    <div className="wizard">
      <Routes>
        <Route exact path='/' element={<Intro />} />
        <Route exact path='/step-1' element={<Step1 />} />
        <Route exact path='/step-2' element={<Step2 />} />
        <Route exact path='/step-3' element={<Step3 />} />
        <Route exact path='/step-4' element={<Step4 />} />
        <Route exact path='/step-5' element={<Step5 />} />
        <Route exact path='/step-6' element={<Step6 />} />
      </Routes>
    </div>
  );
}

export default Wizard;