
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from './components/Body'
import {Outlet} from 'react-router-dom'








//<Outlet/> componenet  

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
