# Greeting start the our app
### You still are there


### Redu Toolkit ###

^^^^^^^^^^^^^^^^^^^
# Redu ToolKit
There is redu toolkit that managed the a store that contains slice of data

# can we create one or more conte api
YES,We can create one or more api
But but in redu case its deferent beacause It managed the all big object 
and give us small part of it.
we make a conte api for user value like this toolkit store this portion in slices

**Example**
// we have diffrent type of slices like : user slice , authenticated slice cart-item slice

in conte api we can modified it from any componenet and any level of deep or nested
<User.Provider value={changable}><User.Provider>

**We Can not  Change toolkit object directly**
1. Firstly Dispatch a Action; Dispatch(Action:"ADDING CART",payoad:{...})
2. Call the reducer function that can modified the toolkit store
3. For reading it
4. Selector read it and it change the cart or what are you want
5. when my store changes the my UI changed : subscribing the UI mean sync with UI


/*
* first create store 
*   -import {configStore} from RTK
   
* secondly create slice 
  - import {createslice} from RTK
  - clreateSlice{ 
      name:'cart' ,// name of slice
      initialState:{
        state:[] // give initial state to state array
      },

      reducers:{
        addItem:(state,action)=>state.push(action.payload)
        .
        .

      }
  }

-* Thirdly export all reducers function from cartSlice(name of slice).actoins
  - export default cartSlice.reducer;


  *Fourthly import these thing from store file and provide it
    - import cartSlice from '/cartSlice'
   - const store = configStore({
        reducer :{
            cart (name of slice):cartSlice,
            user : userSlice,
        }
   })

*/



