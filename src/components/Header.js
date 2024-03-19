import {TiHome} from "react-icons/ti";
import {BiSolidOffer} from "react-icons/bi";
import {FiShoppingCart} from "react-icons/fi";
import {useContext, useState} from "react";
import {Link, ScrollRestoration} from "react-router-dom";
import {CgProfile, CgMail} from "react-icons/cg";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
import {NavLink,useNavigate} from "react-router-dom";
// import Logo from '../images/logo.png'

// Router Do Client Side Routing
// Client Side Routing
// Link is Use anchor tag behind the scenes

const Title = () => {
  return (
    <a href="/">
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

function LogAndSign() {
  const {user,setUser} = useContext(UserContext);
  const navigate = useNavigate();
// console.log(user);
  return (
    <>
      {user?.name === "" ? (
        <button className="logIn-btn bg-slate-900 text-white py-1 px-4 rounded-full hidden sm:flex" onClick={()=>navigate("/login")}>
          
          SignIn
        </button>
      ) : (
        <button className="logIn-btn bg-slate-900 text-white py-1 px-4 rounded-full hidden sm:flex" onClick={()=>setUser({...user,name:"",email:""})}>
          LogOut
        </button>
      )}
    </>
  );
}

const Header = () => {
  const {user} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  // console.log();
  return (
    <header className="header z-50 sticky top-0 shadow-sm bg-white flex justify-between items-center px-4 py-1 font-medium text-gray-800 font-[Poppins]">
      <Title />
      <ul className="header-list  gap-x-8 hidden sm:flex">
        <li>
          <NavLink
            to="/"
            className={({isActive, isPending}) =>
              isActive
                ? "flex items-center gap-x-1  text-orange-300"
                : "flex items-center gap-x-1 "
            }
          >
            <TiHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive, isPending}) =>
              isActive
                ? "flex items-center gap-x-1  text-orange-300"
                : "flex items-center gap-x-1 "
            }
            to="/about"
          >
            <CgProfile /> About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive, isPending}) =>
              isActive
                ? "flex items-center gap-x-1  text-orange-300"
                : "flex items-center gap-x-1 "
            }
            to="/contact"
          >
            <CgMail /> Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive, isPending}) =>
              isActive
                ? "flex items-center gap-x-1  text-orange-300"
                : "flex items-center gap-x-1 "
            }
            to="/offers"
          >
            {" "}
            <BiSolidOffer /> Offer
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive, isPending}) =>
              isActive
                ? "flex items-center gap-x-1  text-orange-300"
                : "flex items-center gap-x-1 "
            }
            to="/instamart"
          >
            {" "}
            <BiSolidOffer /> Instamart
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive, isPending}) =>
              isActive
                ? "flex items-center gap-x-1  text-orange-300"
                : "flex items-center gap-x-1 "
            }
            to="/cart"
          >
            {" "}
            <FiShoppingCart />
            Cart-{cartItems.length}
          </NavLink>
        </li>
      </ul>
      <span className="font-[Kalnia] font-bold">
        {user.name + "-" + user.email}
      </span>
      <LogAndSign />
    </header>
  );
};

export default Header;
