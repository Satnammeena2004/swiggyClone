import {Outlet} from "react-router-dom";

const Contact = () => {
  // const param = useParams();
  // const location = useLocation();
  // const match = useMatches();
  // const  [getItems,setItems,showAllItems,seeAllKeys,seeAllValues] = useStorage();

  console.log("contact Rendring 🚀");
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
