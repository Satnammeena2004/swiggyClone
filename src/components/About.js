import {Outlet,useParams} from 'react-router-dom'


function Company(){
   const {compId} = useParams()
    return <h1>About Company {compId} <Outlet/> </h1>
  }


function MySelf(){
    
    return<h1>About MySelf  </h1>
  }

const About = ()=>{

    return(
        <>
        
        <h1>This is Our About Section</h1>
        <h2>And using Brouser Router</h2>
          <Outlet/>
        </>
    )
}


export { About,Company,MySelf};