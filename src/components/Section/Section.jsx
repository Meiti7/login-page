import React from "react";
import './Section.css';
import Logo from '../../assets/signin-illustration.579b790b.svg'


const section = () => {
  return (
    <div className="section-container">
        <img className="logo" src={Logo} alt="" />
    </div>
  )
}

export default section