import {useState, useEffect, lazy} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  addPost,
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
  singleFetchPosts,

} from "../utils/postSlice";


// const {reactionsByViewers} =lazy(()=>import("../utils/postSlice"))


const reactionsEmojis = {
  thumbsUp: "👍",
  heart: "❤️",
  coffee: "☕",
  haha: "🤣",
};

function FomForAddPost() {
  const [contents, setContents] = useState({name: "", content: ""});
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addPost(contents));
  }

  function handleChange(e) {
    setContents({...contents, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <input
        onChange={handleChange}
        value={contents.content}
        name="content"
        type="text"
      />
      <input
        onChange={handleChange}
        value={contents.name}
        name="name"
        type="text"
      />
      <button onClick={handleClick}>Post</button>
    </div>
  );
}

function Posts() {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);
  console.log("satus",postsStatus)
  const dispatch = useDispatch();

  console.log(posts);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

let content;

if(postsStatus==='pending'){
    content = <p>Loading...</p>
}
else if(postsStatus==='succeeded'){
content =    posts.map((post,i)=><Post key={i} post={post} />)
}
else if (postsStatus==='error'){
    content = <p>Error</p>
}

  return (
    <>
      <FomForAddPost />
      {content}
      <button onClick={()=>dispatch(singleFetchPosts())}>Fetch</button>
    </>
  );
}

function Post({post}) {

    const dispatch = useDispatch();
  console.log("post",post)
    function handleClick(reaction, name) {
        // dispatch();
      }
  return (
    <div>
      <span>{post.content}</span>
      <span>By-{post.name}</span>
      {Object.keys(post.reactions).map((key,i) => (
        <button key={i} onClick={() => handleClick(key, post.name)}>
          {reactionsEmojis?.[key]} {post.reactions[key]}
        </button>
      ))}
    </div>
  );
}

export default Posts;
