import {useEffect, useState} from "react";
import {
  Link,
  useParams,
  Outlet,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

const Comments = () => {
  // const params = useParams()
  // console.log(params)
  useEffect(()=>{
    console.log("useEffect 1");

    return ()=>console.log("unmount useEffct 1")
  },[])
  useEffect(()=>{
    console.log("useEffect 2");
    return ()=>console.log("unmount useEffct 2")
  },[])

  return (
    <>
      <ul>
        <li>
          <Link to={"1"}>GET posts/1</Link>
        </li>
        <li>
          <Link to={"2"}>GET posts/2</Link>
        </li>
        <li>
          <Link to={"3"}>GET posts/3</Link>
        </li>
        <li>
          <Link to={"4"}>GET posts/ 4</Link>
        </li>
        <li>
          <Link to={"5"}>GET posts/5</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export function SpecificPostComment() {
  const [posts, setPosts] = useState([]);
  const params = useParams();
  const loadData = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(params, navigation.state);




  //    useEffect(()=>{
  //     async function getComment(){
  //         const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId="+params.resId);
  //         const comment =  res.json()
  //         setPosts(comment);

  //     }

  //    getComment();

  //    },[params])

  //    if(isLoading){
  //     return <h1>Loading ...⭕</h1>
  //    }
  return (
    <>
      <ul>
        {loadData?.map((post) => (
          <li key={post.id}> 🚀 {post.name}</li>
        ))}
      </ul>
    </>
  );
};

export async function loaders(params,request){
  let res =await fetch("http://localhost:64302/comments/1"); 
  console.log(res)
  return res.json();

};



export default Comments;
