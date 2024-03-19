


const contacts = [
  {
    first:"satnam",
    last:'meena',
    avatar:"https://placekitten.com/g/200/200",
    notes:"Some notes",
    favorite:false,
    id:1,
  }
,  {
    first:"umesh",
    last:'meena',
    avatar:"https://placekitten.com/g/200/200",
    notes:"Some notes",
    favorite:true,
    id:2,
  }
,  {
    first:"channu",
    last:'meena',
    avatar:"https://placekitten.com/g/200/200",
    notes:"Some notes",
    favorite:false,
    id:3,
  }
,  {
    first:"ankit",
    last:'meena',
    avatar:"https://placekitten.com/g/200/200",
    notes:"Some notes",
    favorite:false,
    id:4,
  }
]

async function contactAsync(){

  return  new Promise((resolve,reject)=>{
    setTimeout(()=>{
     return resolve(contacts)
    },1000)
  })
} 



export async function getContact(id){
  const res = await contactAsync();
  return await res.find((e)=>e.id===id);

}
export async function deleteContact(id){
  const res = await contactAsync();
  return await res.filter((e)=>e.id!==id);

}

export async function getContacts(){
  const res =await contactAsync();
  return  res;
};

export async function createContacts(i){
    return {
        first: "",
        last: "",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "",
        notes: "",
        favorite:false,
        id:4+i,
      }}