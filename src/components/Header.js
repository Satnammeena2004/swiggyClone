import {TiHome} from 'react-icons/ti'
import {BiSolidOffer} from 'react-icons/bi'
import {FiShoppingCart} from 'react-icons/fi'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { CgProfile,CgMail } from "react-icons/cg";
// import Logo from '../images/logo.png'



// Router Do Client Side Routing
// Client Side Routing
// Link is Use anchor tag behind the scenes


const Title = () => {
    return (
    <a href='/'>
      <img
        className="logo"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYm8lAGJ3xhJtR97fPwyWwPce0uMOFXdRiQ&usqp=CAU"
        }
        alt="logo"
        />
        </a>  
    );
  };
  
  
  
  const Header = () => {
    const [isLoggIn,setIsLoggIn] = useState(false)
    return (
      <header className="header">
        <Title />
        <ul className="header-list">
          <li>
          <Link to="/">
            <TiHome /> Home
          
          </Link>  
          </li>
          <li>
            <Link to="/about">
            <CgProfile/> About
            </Link>
          </li>
          <li>
            <Link to="/contact">
            <CgMail/> Contact
            </Link>
          </li>
          <li>
            <BiSolidOffer /> Offer
          </li>
          <li>
            <FiShoppingCart /> Cart
          </li>
        </ul>
        <button className='logIn-btn' onClick={()=>setIsLoggIn(!isLoggIn)}>{isLoggIn?"Sign":'Log'} In</button>
      </header>
    );
  };

export default Header;