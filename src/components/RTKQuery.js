import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { RESTAURANT_MENU_URL, RESTAURENT_URL } from "../constants";

export const fetchUsers = createApi({
  reducerPath: "fetchUsers",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      providesTags: ["users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: {name: user.name, age: user.age},
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: "users/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const fetchPosts = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  endpoints:(builder)=>({
      getPosts:builder.query({
        query:()=>"posts",
        providesTags:["posts"]
        
      }),
      getOnePost:builder.query({
        query:(id)=>"posts/"+id,
        providesTags:["posts"]
        
      }),
     
     postAPost:builder.mutation({
        query:(post)=>({
             url:"posts",
             method:"POST",
             body:{content:post.content,id:post.id},
            
        }),
        invalidatesTags:["posts"]
    }),
    deletePost:builder.mutation({
        query:(id)=>({
            url:"posts/"+id,
            method:"DELETE"
        }),
        invalidatesTags:["posts"]
        
    }),
    editPost:builder.mutation({
        query:(post)=>({
            url:"posts/"+post.id,
            method:"PUT",
            body:{content:post.content,id:post.id}
        }),
        invalidatesTags:["posts"]
     })
    
    })
});


export const restaurantMenuFetchQuery = createApi({
      reducerPath:"restaurantMenuApi",
      baseQuery :fetchBaseQuery({
        baseUrl:RESTAURANT_MENU_URL
      }),
      endpoints:(builder)=>({
        getRestuarantMenuApi:builder.query({
          query:(param)=>param
        })
        ,
      })
})


export const  restaurantFetchQuery = createApi({
     reducerPath:"restaurantApi",
     baseQuery:fetchBaseQuery({baseUrl:RESTAURENT_URL}),
     endpoints:(builder)=>({
       getResataurant:builder.query({
        query:()=>""
       })
     })
})

export const {useGetResataurantQuery} = restaurantFetchQuery;

export const {useGetRestuarantMenuApiQuery} = restaurantMenuFetchQuery;
export const fetPst = fetchPosts;
export const {useGetPostsQuery,usePostAPostMutation,useDeletePostMutation,useGetOnePostQuery,useEditPostMutation} =fetchPosts;

export const {useGetUsersQuery, useAddUserMutation, useDeleteUserMutation} =
  fetchUsers;
