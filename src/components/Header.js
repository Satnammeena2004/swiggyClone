import {TiHome} from 'react-icons/ti'
import {BiSolidOffer} from 'react-icons/bi'
import {FiShoppingCart} from 'react-icons/fi'

const Title = () => {
    return (
      <img
        className="logo"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYm8lAGJ3xhJtR97fPwyWwPce0uMOFXdRiQ&usqp=CAU"
        }
        alt="logo"
      />
    );
  };
  
  
  
  const Header = () => {
    return (
      <header className="header">
        <Title />
        <ul className="header-list">
          <li>
            <TiHome /> Home
          </li>
          <li>
            <BiSolidOffer /> Offer
          </li>
          <li>
            <FiShoppingCart /> Cart
          </li>
        </ul>
      </header>
    );
  };

export default Header;