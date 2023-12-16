
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from './components/Body'











const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
