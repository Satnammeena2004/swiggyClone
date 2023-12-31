import {Outlet,useParams,useLocation,useMatches} from 'react-router-dom'


const Contact = ()=>{
const param = useParams();
const location = useLocation();
const match = useMatches()

console.log(match);
console.log(location);
console.log(param);
    return(

        <>
    <h1>Contact Us Page</h1>
    <Outlet/>
    
    </>
        )
}


export default Contact;