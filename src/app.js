
// import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Outlet} from 'react-router-dom'
import UserContext from "./utils/UserContext";
import { useState } from "react";








//<Outlet/> componenet  

const AppLayout = () => {
  const [user,setUser] = useState({name:"Satnam Meena",email:'satnam@gmail.com'});
  return (
    <>
     {/* <UserContext.Provider children={[<Header/>,<main><Outlet/></main>,<Footer/>]} value={{user:user,setUser:setUser}}/> */}
     <UserContext.Provider value={{user:user,setUser:setUser}}>
     <Header />
      <main className="mb-3">
      
      <Outlet/>
      </main>
    <Footer />
    </UserContext.Provider>
     
    </>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
