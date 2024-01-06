import { useEffect, useState } from "react";
//on demand loading: mean initialy the home ui rendered when instamart clicked then it   js file loads ;
const InstaMart=()=>{
const [photos,setPhotos] = useState([]);
useEffect(()=>{
async function getPhotos(){
    const responce =await fetch("https://jsonplaceholder.typicode.com/photos");
    const json = await responce.json();
    setPhotos(json);
} 

// getPhotos()

},[])

    return (
        <>
        <h1>It is heavy...</h1>
        <h2>100s of Componenet in it </h2>
        {photos.slice(0,10).map((e)=><img key={e.id} src={e.url} alt="..."/>)}
        </>
    )

}


export default InstaMart;