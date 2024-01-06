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
  

function LogAndSign(){
  const [isLoggIn,setIsLoggIn] = useState(false)


  return(
    <button className='logIn-btn' onClick={()=>setIsLoggIn(!isLoggIn)}>{isLoggIn?"Sign":'Log'} In</button>

  )
    
}
  
  
  const Header = () => {
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
        <Link to="/offers">   <BiSolidOffer /> Offer</Link> 
          </li>
          <li>
        <Link to="/instamart">   <BiSolidOffer /> Instamart</Link> 
          </li>
          <li>
         <Link to="/cart">  <FiShoppingCart /> Cart</Link> 
          </li>
        </ul>
        <LogAndSign/>
      </header>
    );
  };

export default Header;