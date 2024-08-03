import {Outlet} from "react-router-dom";

const Contact = () => {


  console.log("contact Rendring 🚀");

  return (
    <>
      <h1>Contact Us Page : </h1>
      <Outlet />
    </>
  );
};

export default Contact;
