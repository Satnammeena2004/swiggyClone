 

 import {createSlice} from '@reduxjs/toolkit'

function getConsole(argu){
  console.log("get Consoleeeeeeeeeeeeeeeeeeeeeeeeeee",argu)
}

 const cartSlice = createSlice({
         name:'cart',
         initialState:{
          items:[],
          count:0,
          item:[{name:"satnam",id:1,count:1}]
         },
         reducers:{
          addItem:(state,action)=>{ 
          const youAreThere = state.items.find((item)=>item.id === action.payload.id);
          if(!youAreThere) {
            getConsole(action.payload)
            delete action.payload.orderCount
            action.payload.orderCount = 1;
           state.items.push(action.payload)
          }else{
            youAreThere['orderCount']++;
          }
                  
          },
          disCardTheItem:(state,action)=>{
            const youAreThere = state.items.find((item)=>item.id === action.payload.id);
            const i = state.items.findIndex((item)=>item.id === action.payload.id);
            if(youAreThere['orderCount']>=2){
              youAreThere['orderCount']--;
              
            }else{
            delete  youAreThere['orderCount'];
             state.items.splice(i,1);
            }

          },
          removeItem:(state,action)=>{
            console.log(state.items.filter((e)=>e.id !== action.payload.id))
          }
          ,
          clearItems:(state)=>{
              state.items = [];
          }
          ,
          fakeItemAdd:(state,action)=>{
            if(state.item.find((e)=>e.name.includes(action.payload.name))){
             let i =  state.item.findIndex((e)=>e.name.includes(action.payload.name));
             let elem =  state.item.find((e)=>e.name.includes(action.payload.name));
              state.item.splice(i,1,{...action.payload,count:elem.count+1});
            }
            else{
              state.item.push({...action.payload,count:1});
            }
          },
          fakeItemRemove:(state,action)=>{
            if(state.item.find((e)=>e.name.includes(action.payload.name))){
             let i =  state.item.findIndex((e)=>e.name.includes(action.payload.name));
             let elem =  state.item.find((e)=>e.name.includes(action.payload.name));
             if(elem.count<=1){
               state.item = state.item.filter((e)=>e.id!==elem.id)
             }else{
               state.item.splice(i,1,{...action.payload,count:elem.count-1});
              } 
            }
            
          }} 
 })

// console.log("cartslice",cartSlice)
export const {addItem,removeItem,clearItems,fakeItemAdd,fakeItemRemove,disCardTheItem} = cartSlice.actions;

export default cartSlice.reducer;