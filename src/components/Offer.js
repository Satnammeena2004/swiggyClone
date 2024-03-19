import { useNavigate } from 'react-router-dom';


function Offers() {
  console.log("rendering");
  const navigate = useNavigate();

  setTimeout(()=>{
    navigate("/login",{replace:true});
  },500)

 return(   <>
      <h2>You have some Offres</h2>
      <ul>
        <li>50% off above 300 </li>
        <li>12% off above 120 </li>
        <li>50% of Two items in Restaurant </li>
      </ul>
    </>)
}

export default Offers;
