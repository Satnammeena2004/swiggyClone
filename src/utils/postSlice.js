import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

function getConsole(argument){
    console.log(arguments);
}

const fakeApiCall = ()=>{
    return new Promise((resolved,reject)=>{
           setTimeout(()=>{
               resolved([{content:"hello !!",name:"Vicky",id:99,reactions:reactions},{content:"Hello my frirneds !👋",name:"satnam",id:1,reactions:reactions},{content:"hii my frirneds !👋",name:"umesh",id:2,reactions:reactions}])
           },2000)
    })
}
const singleFakeApiCall = ()=>{
    return new Promise((resolved,reject)=>{
           setTimeout(()=>{
               resolved({content:"hello !!",name:"Vicky",id:99,reactions:reactions})
           },2000)
    })
}



const reactions = {
    thumbsUp:0,
    heart:0,
    coffee:0,
    haha:0,
}

export  const fetchPosts = createAsyncThunk('posts/singleFetchPost',async ()=>{
       const responce = await fakeApiCall();
       return responce;
})

export  const singleFetchPosts = createAsyncThunk('posts/singleFetchPosts',async ()=>{
       const responce = await singleFakeApiCall();
       return responce;
})


const initialState={
    posts:[],
    status:'idle'// 'idel' | 'loading' | 'succeeded' | 'failed' | ''
    ,
    error:null

}


const postSlice = createSlice({
    name:'posts',
    initialState:initialState,
    reducers:{
        addPost:(state,action)=>{
        action.payload.reactions = reactions;
         state.posts.push(action.payload);
        },
        reactionsByViewers:(state,action)=>{
           let post = state.posts.find((p)=>p.name===action.payload.name);
            if(post.name===action.payload.name){
              post.reactions[action.payload.reaction]++;
            }
          
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state,action)=>{
            state.status = 'pending'
        }).addCase(fetchPosts.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            getConsole(state,action)
            state.posts= state.posts.concat(action.payload)
        }).addCase(fetchPosts.rejected,(state,action)=>{
                 state.status = 'failed'
                 state.error =action.error;
        })
        .addCase(singleFetchPosts.fulfilled,(state,action)=>{
                
        }) 

    }
})

export const selectAllPosts = (state)=>state.posts.posts;
export const getPostsStatus = (state)=>state.posts.status;
export const getPostsError = (state)=>state.posts.error;
export const {addPost,reactionsByViewers} = postSlice.actions;

console.log("action",postSlice.actions)

export default postSlice.reducer;

