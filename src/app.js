// import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { createContext, useState} from "react";
import {Provider} from "react-redux";
import store from "./utils/store";


export const UserAuth = createContext(false);


const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Satnam Meena",
    email: "satnam@gmail.com",
  });

  const [userAuthentication,setUserAuthentication] = useState(false)
  return (
    <>
      {/* <UserContext.Provider children={[<Header/>,<main><Outlet/></main>,<Footer/>]} value={{user:user,setUser:setUser}}/> */}
      <Provider store={store}>
       <UserAuth.Provider  value={userAuthentication}>
        <UserContext.Provider value={{user: user, setUser: setUser}}>
          <Header />
          <main className="mb-3 font-[Poppins]">
            <Outlet context={[setUserAuthentication]} />
          </main>
          <Footer />
        </UserContext.Provider>
       </UserAuth.Provider>
      </Provider>
    </>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
