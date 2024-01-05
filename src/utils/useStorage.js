

const useStorage = ()=>{

function getItems(key){
   localStorage.getItem(key)
}
function setItems(key,value){
 localStorage.setItem(key,value)
}
function showAllItems(key,value){
   
   return {...localStorage}
}

function seeAllKeys(){
    return Object.keys({...localStorage})
}
function seeAllValues(){
    return Object.values({...localStorage})
}


return [getItems,setItems,showAllItems,seeAllKeys,seeAllValues]
}


export default useStorage;

