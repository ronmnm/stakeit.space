import React from 'react'
import ReactLogo from './8.svg';
import './main-spinner.css'

const MainSpinner = () => {
  return (
    <div className="my_loader">
      <img src={ReactLogo} alt="React Logo" />
    </div>
  );
};
export default MainSpinner;