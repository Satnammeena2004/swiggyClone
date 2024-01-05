import {Outlet, useParams, useLocation, useMatches} from "react-router-dom";
import useStorage from "../utils/useStorage";






const Contact = () => {
  const param = useParams();
  const location = useLocation();
  const match = useMatches();
  // const  [getItems,setItems,showAllItems,seeAllKeys,seeAllValues] = useStorage();


  console.log("contact Rendring 🚀")
  // console.log(match);
  // console.log(location);
  // console.log(param);
  return (
    <>
      <h1>Contact Us Page : </h1>
      <Outlet />
    </>
  );
};

export default Contact;
