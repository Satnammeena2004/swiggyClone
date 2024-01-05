import { useEffect, useState } from "react";


function Profile(props){
    const [count,setCount] = useState(0);

   

   useEffect( ()=>{
console.log("useEffect");
// const timer = setInterval(()=>console.log("Again!!!!!1"),1000)

  return ()=>{
    console.log("Return useEffect")
    // clearInterval(timer);
  }
   },[])

   console.log("Render")
      return (
        <>
        <h1 style={{color:'lightgreen'}}>Functional Profile {Math.round(Math.random()*10)} </h1>
        <h2 style={{color:'lightgreen'}}>Name :{props.name} </h2>
        <h3>Count :{count}</h3>
        <button onClick={()=>{setCount(1)}}>setCount</button>
   
        </>
      )
    }


    export default Profile;