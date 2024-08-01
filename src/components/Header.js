import { TiHome } from "react-icons/ti";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpCircleOutline } from "react-icons/io5";
import { CgLogIn } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";


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
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      {user?.name === "" ? (
        <button className="logIn-btn bg-slate-900 text-white py-1 px-4 rounded-full hidden sm:flex" onClick={() => navigate("/login")}>

          SignIn
        </button>
      ) : (
        <button className="logIn-btn bg-slate-900 text-white py-1 px-4 rounded-full hidden sm:flex" onClick={() => setUser({ ...user, name: "", email: "" })}>
          LogOut
        </button>
      )}
    </>
  );
}



function Button({children,name}){

  return( 
  <div className="flex  items-center justify-center gap-x-2">
  <button>{children}</button>
  <span className="text-sm">{name}</span>
  </div>
  )
  
}

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="header z-50 sticky top-0 shadow-sm bg-white flex justify-between items-center px-4 py-1 font-medium text-gray-800 font-[Poppins]">
      <Title />
      <div className="flex gap-2 w-2/3 justify-between ">
        <Button name={"Home"}><TiHome/></Button>
        <Button name={"Search"}><IoIosSearch/></Button>
        <Button name={"Offers"}><BiSolidOffer/></Button>
        <Button name={"Help"}><IoHelpCircleOutline/></Button>
        <Button name={"Sign In"}><CgLogIn/></Button>
        <Button name={"Cart"}><FiShoppingCart/></Button>
      </div>
      
          </header>
  );
};

export default Header;
