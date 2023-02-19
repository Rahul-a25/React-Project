import React from 'react'
import "./footer.css"
import { MdFacebook } from "react-icons/md";
import { BsLinkedin,BsInstagram} from "react-icons/bs";


export const Facebook = () => {
  return (
    <div>
      <MdFacebook className='fb'/>
    </div>
  )
}

export const Linkedin = () => {
    return (
      <div>
        <BsLinkedin className='link'/>
      </div>
    )
  }
  export const Insta = () => {
    return (
      <div>
        <BsInstagram className='insta'/>
      </div>
    )
  }






const Footer = () => {
  return (
    <div className='footermain '>
            <div className="maindiv">
         <div className='first same'> 
            <h3>About Us</h3>
            <p>Support Center</p>
            <p>Customer Support</p>
            <p>About Us</p>
            <p>Copyright</p>
            <img src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png" width={103} height={58} alt="" />
         </div>
         <div className='second same'>
         <h3>Our information</h3>
            <p>Return Policy</p>
            <p>privacy Policy</p>
            <p>Term and Condition</p>
            <p>Site Map</p>
            <img src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png" width={103} height={58} alt="" />
         </div>
         <div className='third same'>
         <h3>My Account </h3>
            <p>Press Inqueries</p>
            <p>Social Media</p>
            <p>Directories</p>
            <p>Image & Broll</p>
            <img src="https://www.urbansciencemep.com/_next/static/images/logo-535171e8abb5d5b989bb3a22b706e1c1.png" width={103} height={58} alt="" />
         </div>
         <div className='fourth same'>
         <h3>Contact</h3>
            <span><Facebook /><p className='para'>Facebook</p> </span>
            <span><Linkedin/><p className='linkwala'>LinkedIn</p> </span>
            <span><Insta/> <p className='instawala'>Instagram</p> </span>
            </div> 
         </div>
    </div>
  )
}

export default Footer
