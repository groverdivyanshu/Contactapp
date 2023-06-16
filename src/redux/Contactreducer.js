import { createSlice } from "@reduxjs/toolkit";

const initialState={
    contacts:[]
    
}
//create redux
 const contactslice=createSlice({
    name:"contact",
    initialState:initialState,
    reducers:{
        //add the details after fetching from API
fetchcontact:(state,action)=>{
  state.contacts=action.payload
    
},
//ADDCONATCT ACTION ADD CONATCT COMING FROM ADD COMPOENNET
Addcontact:(state,action)=>{
    state.contacts=[
        ...state.contacts,
        action.payload
    ]

},
//EDIT ACTION WILL EDIT THE CONATCT COMING FORM EDIT COMPOENENT
Editcontact:(state,action)=>{

   const updatestate=state.contacts.map((item)=>{
    if(item.id===action.payload.id)
    {
        return action.payload;
    }
    return item;

   })

   state.contacts=updatestate;

},
//DELETE THE CONATCT AFETR COLLECTING ID
Deletecontact:(state,action)=>{
const arr=state.contacts.filter((value)=>{
   return  value.id!==action.payload

    
})
console.log("arr",arr)
state.contacts=arr;

}


    }
})
//GET ALL ACTION AND STATE
export const contactreducer=contactslice.reducer;
// GET ALL ACTIONS DEFINED ABOVE
export const actions=contactslice.actions;
//IT WILL PROVIDE THE SATET THAT IS CONATCT
export const contactSelector=(state)=>(state.contactreducer.contacts);
