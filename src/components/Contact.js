import {Outlet} from 'react-router-dom'

const Contact = ()=>{

    return(

        <>
    <h1>Contact Us Page</h1>
    <Outlet/>
    <iframe title="mySite" src='http://localhost:3000/about' width={'10rem'}/>
    </>
        )
}


export default Contact;