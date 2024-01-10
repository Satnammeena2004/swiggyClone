import {TiHome} from 'react-icons/ti'
import {BiSolidOffer} from 'react-icons/bi'
import {FiShoppingCart} from 'react-icons/fi'
import { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import { CgProfile,CgMail } from "react-icons/cg";
import UserContext from '../utils/UserContext';
// import Logo from '../images/logo.png'



// Router Do Client Side Routing
// Client Side Routing
// Link is Use anchor tag behind the scenes


const Title = () => {
    return (
    <a href='/'>
      <img
        className="logo h-14 w-14 rounded-full"
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
    <button  className='logIn-btn bg-slate-900 text-white py-1 px-4 rounded-full hidden sm:flex' onClick={()=>setIsLoggIn(!isLoggIn)}>{isLoggIn?"Sign":'Log'} In</button>

  )
    
}
  
  
  const Header = () => {
  const {user} = useContext(UserContext);
    return (
      <header className="header flex justify-between items-center px-4 py-1 font-medium text-gray-800 font-[Poppins]">
        <Title />
        <ul className="header-list  gap-x-8 hidden sm:flex">
          <li>
          <Link to="/" className="flex items-center gap-x-1 ">
            <TiHome /> Home
          
          </Link>  
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-x-1">
            <CgProfile/> About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center gap-x-1">
            <CgMail/> Contact
            </Link>
          </li>
          <li>
        <Link to="/offers" className="flex items-center gap-x-1">   <BiSolidOffer /> Offer</Link> 
          </li>
          <li>
        <Link to="/instamart" className="flex items-center gap-x-1">   <BiSolidOffer /> Instamart</Link> 
          </li>
          <li>
         <Link to="/cart" className="flex items-center gap-x-1">  <FiShoppingCart /> Cart</Link> 
          </li>
        </ul>
        <span className='font-[Kalnia] font-bold'>{user.name +'-'+user.email}</span>
      
        <LogAndSign/>
      </header>
    );
  };

export default Header;