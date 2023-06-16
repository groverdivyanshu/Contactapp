
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../src/Components/Showcontact.css"
import { useSelector } from 'react-redux';
import { contactSelector } from '../src/redux/Contactreducer';
import { useDispatch } from 'react-redux';
import { actions } from '../src/redux/Contactreducer';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Addcontact from './Components/Addcontact';
import Showcontact from './Components/Showcontact';
import Edit from './Components/Edit';
import Add from './Components/Add';
import { ToastContainer } from "react-toastify";


function App() {  
const dispatch=useDispatch();
console.log("App compoennet");
useEffect(()=>{
  const data=[];

//Fecth all cotacts from  API 
const fetchdetails=async ()=>{
 
  const response=await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log("response",response)
  response.data.map((contact)=>(

  
      data.push({
          id: contact.id,
          name: contact.name,
          number: contact.phone,
          email: contact.email
        })

))
dispatch(actions.fetchcontact(data));
}


fetchdetails();

},[])

  return (
   
    <>
    <h1 style={{marginLeft:500}}>Conatct List APP</h1>

  
      <Routes>
        <Route path="/" element={<Showcontact/>}/>
     <Route  path="/add" element={<Add/>}/>
     <Route  path="/edit/:id" element={<Edit/>}/>
      </Routes>
      <ToastContainer/>
      
  
</>
  );
}

export default App;
