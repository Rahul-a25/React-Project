import React from 'react'
import "./navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export const Phone = () => {
  return (
    <div>
      <FaPhoneAlt className='phone'/>
      1234567789
    </div>
  )
}


 export const Email = () => {
  return (
    <div>
      <MdEmail className='email'/>rohan1234@gmail.com
    </div>
  )
}



 


const Navbar = () => {
  return (

    <>
        <header className='main'>
        <div className='left'><img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png"  alt="" /></div>
        <div className='middle'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='right'>
            <div className='upper'>
                <span><Phone/> </span>
                <span><Email/></span>
            </div>
            <div className='lower'>
                <button>Enqurie Now</button>
            </div>
        </div>
        </header>
        </>
  )
}

export default Navbar;
