import {
  configureStore,
  createAction,
  createAsyncThunk,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import axios from "axios";
import {useEffect, useState} from "react";
import {Provider, useSelector, useDispatch} from "react-redux";
import {
  fetchUsers,
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  fetchPosts,
  useDeletePostMutation,
  useGetPostsQuery,
  usePostAPostMutation,
  useEditPostMutation,
  useGetOnePostQuery,
  res,
  restaurantMenuFetchQuery,
  fetPst,
} from "./RTKQuery";
import {Outlet, Link} from "react-router-dom";
import {useParams} from "react-router-dom";
//creating store

//createiing slices;

const products = [
  {name: "shampoo", id: 1},
  {name: "colget", id: 2},
];

//SLICESS -----------------------------

//asycTHUNK

const fetchUserData = createAsyncThunk(
  "reward/getUser",
  async (payloadFromDispath, thunApi) => {
    console.log("payloadFromDispath,thunApi", payloadFromDispath, thunApi);
    try {
      const getData = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      // console.log(thunApi.getState((store)=>store.myCart.users),thunApi.requestId);

      return getData.data;
    } catch (err) {
      return thunApi.rejectWithValue(err.responce.status);
    }
  }
);

const increseSalaryIfRewardIncresed = createAction("reward/incrementForReward");

const myCartSlice = createSlice({
  name: "myCart",
  initialState: {
    items: ["banana", "☕"],
    dummyItems: ["😋", "🍉", "🍊", "🍇", "🍈"],
    reward: {
      points: 10,
    },
    salary: {
      amount: 20000,
    },
    users: {
      users: [{name: "umesh", age: 21, id: 10}],
      status: "idle",
    },
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.parent.child.push("Wow!");
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state = [];
    },
    increseSalary: (state, action) => {
      state.salary.amount += action.payload;
    },
  },
  extraReducers: (bulider) => {
    bulider
      .addCase(increseSalaryIfRewardIncresed, (state, action) => {
        if (action.payload > 100) {
          state.salary.amount += 100;
        }
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        //  console.log(action.payload)
        state.users.users.push(action.payload);
        state.users.status = "fullfilled";
      })
      .addCase(fetchUserData.pending, (state, action) => {
        state.users.status = "pending";
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        console.log(action.payload);
        state.users.status = "rejected";
      });
  },
});
const {addItem, removeItem, increseSalary} = myCartSlice.actions;
const myCartSliceToStore = myCartSlice.reducer;

//STORE -----------------------------

//CREATING ACTIONS AND REDUCES BY createActions and createReducers;

// const initialState = {
//   points: 15,
// };

// const incrementForReward = createAction("reward/incrementForReward");
// const derementForReward = createAction("reward/decrementForReward");

// const rewardReducer = createReducer(initialState, (bulider) => {
//   bulider
//     .addCase(incrementForReward, (state, action) => {
//       state.points += action.payload;
//     })
//     .addCase(derementForReward, (state, action) => {
//       state.points -= action.payload;
//     });
// });

// function Reward() {
//   const [rewardInput, setRewardInput] = useState(1);
//   const reward = useSelector((store) => store.reward.points);
//   const dispatch = useDispatch();

//   function handleClick() {
//     dispatch(incrementForReward(10));
//   }
//   function handleDecrement() {
//     dispatch(derementForReward(10));
//   }

//   function handleincrementByAmount() {
//     dispatch(incrementForReward(parseInt(rewardInput)));
//   }

//   return (
//     <>
//       <h1 className="bg-orange-300">Rewards {reward}</h1>
//       <input
//         type="number"
//         onChange={(e) => setRewardInput(e.target.value)}
//         className="border"
//         value={rewardInput}
//       />
//       <button
//         className="border bg-cyan-500 text-orange-50 p-2"
//         onClick={handleClick}
//       >
//         {" "}
//         Increment
//       </button>
//       <button
//         className="border bg-cyan-500 text-orange-50 p-2"
//         onClick={handleDecrement}
//       >
//         {" "}
//         decremet
//       </button>
//       <button
//         className="border bg-cyan-500 text-orange-50 p-2"
//         onClick={handleincrementByAmount}
//       >
//         {" "}
//         incrementByAmount :{rewardInput}
//       </button>
//     </>
//   );
// }

// function Salary() {
//   const dispatch = useDispatch();
//   useEffect(()=>{
//  async  function getData(){
//    const userData =await axios.get("http://localhost:8000/users");

//    console.log(userData);

//     }
//     getData()
//   },[])
//   const salary = useSelector((store) => store.myCart.salary.amount);

//   function handleClick() {
//     dispatch(increseSalary(2000));
//   }

//   return (
//     <>
//       <h1 className="bg-orange-400">Salary {salary}</h1>
//       <button
//         className="border bg-cyan-500 text-orange-50 p-2"
//         onClick={handleClick}
//       >
//         IncreaseSalary
//       </button>
//     </>
//   );
// }

//CREATING THUNK FUNCTION;

function GetUser() {
  const users = useSelector((store) => store.myCart.users.users);
  const status = useSelector((store) => store.myCart.users.status);

  const dispatch = useDispatch();
  // console.log(users);
  function handleClick() {
    dispatch(fetchUserData());
  }

  return (
    <>
      <ul>
        {users?.map((e, i) => (
          <li key={i}>✅{e.name}</li>
        ))}
        {status}
      </ul>
      <button onClick={handleClick}> FetchUsers</button>
    </>
  );
}

//GET USERS FROM RTK QUERY

function UsersFromQuery() {
  const {data, isLoading, isError} = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [user, setUser] = useState({name: "", age: 1});
  // console.log(data);

  function handleAddUser() {
    addUser({name: user.name, age: user.age});
  }
  function handleDeleteUser(id) {
    deleteUser(id);
  }

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="bg-rose-200 border-red-400 border-2">
      <h1 className="bg-indigo-800 text-zinc-50">UsersFromQuery</h1>
      {!isLoading ? (
        <ul>
          {data &&
            data.map((e, i) => (
              <li key={i}>
                🚀{e.name} Age: {e.age}{" "}
                <button
                  className="border-1 bg-red-400 border-r-indigo-400 p-1 rounded-sm my-1"
                  onClick={() => handleDeleteUser(e.id)}
                >
                  delete
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <h2>isLoading....</h2>
      )}
      <input value={user.age} name="age" type="text" onChange={handleChange} />
      <input
        value={user.name}
        name="name"
        placeholder="name"
        type="text"
        onChange={handleChange}
      />
      <button
        className="border-1 bg-red-400 border-r-indigo-400 p-2 my-1"
        onClick={handleAddUser}
      >
        AddUser
      </button>

      {isError && <p>ERROR!!!!!</p>}
    </div>
  );
}

function PostFromQuery() {
  const [post, setPost] = useState({name: "", editPost: "", id: 0});
  const {data, isLoading, isError, refetch} = useGetPostsQuery();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [deletePost] = useDeletePostMutation();
  const [editPost] = useEditPostMutation();
  const [senPost] = usePostAPostMutation();

  function handleAddPost() {
    let l = data.length + 1;
    senPost({content: post.name, id: l.toString()});
  }

  function handleDelete(id) {
    console.log(id);
    deletePost(id.toString());
  }

  function handlePut(id) {
    // console.log(id)
    if (isInputVisible) {
      editPost({content: post.editPost, id: id.toString()});
      setIsInputVisible(false);
    } else {
      setPost({...post, id: id});
      setIsInputVisible(true);
    }
  }
  //  function handleDeleteUser(id){
  //  }

  function handleChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="bg-rose-200 border-red-400 border-2">
      <h1 className="bg-indigo-800 text-zinc-50">PostsFromQuery</h1>
      {!isLoading ? (
        <ul>
          {data?.map((p) => (
            <li key={p.id}>
              ✅{p.content}
              <button onClick={() => handleDelete(p.id)}>⛔</button>{" "}
              {p.id === post.id && isInputVisible ? (
                <input
                  value={post.editPost}
                  name="editPost"
                  placeholder="write a post"
                  type="text"
                  onChange={handleChange}
                />
              ) : (
                ""
              )}{" "}
              <button onClick={() => handlePut(p.id)}>🔁</button>{" "}
              <Link to={"onePost/" + p.id}>Show</Link>{" "}
            </li>
          ))}
        </ul>
      ) : (
        <h1>Loading....</h1>
      )}
      <input
        value={post.name}
        name="name"
        placeholder="write a post"
        type="text"
        onChange={handleChange}
      />
      <button
        className="border-1 bg-red-400 border-r-indigo-400 p-2 my-1"
        onClick={handleAddPost}
      >
        Post
      </button>
      <button
        className="border-1 bg-red-400 border-r-indigo-400 p-2 m-1"
        onClick={() => refetch()}
      >
        Refetch-Post
      </button>
      {/* <button className="border-1 bg-red-400 border-r-indigo-400 p-2 m-1" onClick={()=>refetch()}>Refetch-Post</button> */}
    </div>
  );
}

export function ShowOnePost() {
  const {postId} = useParams();
  const {data, isError, isLoading} = useGetOnePostQuery(postId);
  const res = useGetOnePostQuery(postId);
  console.log("res", res, fetPst);
  if (isError) {
    return <h1>Eror</h1>;
  }
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <h2>Data</h2>
      <h1>🟧{data?.content}</h1>
    </>
  );
}

const AppForPractices = () => {
  return (
    <>
      {/* <Salary />
      <Reward /> */}
      <GetUser></GetUser>
      <PostFromQuery />

      {/* <UsersFromQuery /> */}
    </>
  );
};

function Container() {
  return (
    <div
      style={{width: "10rem", height: "10rem", border: "0.4rem solid blue"}}
    ></div>
  );
}



function Practices() {
  const [arr,setArr] = useState(["1","2","3","4","5","6","7","8","9"]);


  useEffect(()=>{
     onscroll = (e)=>{
      console.log(e)
     }
  },[])

  return (
    <div>
      <h1>Practices</h1>
      <Provider store={store}>
        {/* <AppForPractices />

        <Outlet/> */}
        <div style={{border:"0.2rem solid black"}}>
        {arr.map((e,i)=><Container key={i} />)  }
        </div>
      </Provider>
    </div>
  );
}

const store = configureStore({
  reducer: {
    myCart: myCartSliceToStore,
    // reward: rewardReducer,
    [fetchUsers.reducerPath]: fetchUsers.reducer,
    [fetchPosts.reducerPath]: fetchPosts.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    console.log("getDefaultMiddleware", getDefaultMiddleware());
    return getDefaultMiddleware().concat(
      fetchUsers.middleware,
      fetchPosts.middleware
    );
  },
});

export default Practices;
