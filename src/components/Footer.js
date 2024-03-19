import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {user} =useContext(UserContext);

    return (
      <footer className="footer border-2 rounded-md flex justify-center gap-5 font-bold font-[Kalnia]  w-full ">
      <p >Footer</p>
  
      </footer>
    )
  };


export default  Footer;