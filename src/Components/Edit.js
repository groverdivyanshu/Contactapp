import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { contactSelector } from '../redux/Contactreducer';
import "./Edit.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { actions } from '../redux/Contactreducer';
import axios from 'axios';
//Edit the conatct list by this fucntion
export default function Edit() {
  const navigate=useNavigate();
const dispatch=useDispatch();
  const {id}=useParams();
  const contact=useSelector(contactSelector);
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[number,setNumber]=useState("");
const currentcontact=contact.find((item)=>{
  if(item.id==id)
  return item;
})
console.log("currentcontact",currentcontact);
useEffect(()=>{
  if(currentcontact)
  {
    console.log("divyansi")
    setName(currentcontact.name);
    setEmail(currentcontact.email);
    setNumber(currentcontact.number);
  }
},[currentcontact])

  const data={
    id:parseInt(id),
    name,
    email,
    number,
  }
  async function handleupdate(e)
  {
  e.preventDefault();
  // call and send the data which conatcts needs to edit
  
    const response=await axios.put("https://jsonplaceholder.typicode.com/users/1",data);
    console.log("response",response.data);
    dispatch(actions.Editcontact(response.data));
    toast.success("Edit the contact sucessfuuly",
    {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
  )

    navigate("/");


  }
  return (
    <div className='size'>

      <h1 style={{marginLeft:100}}>EDIT THE CONTACT</h1>

<form style={{marginLeft:100,marginTop:60}}> 
    <label for="fname"> Name</label>
    <input type="text"  name="name" value={name} onChange={(e)=>setName(e.target.value)}/>

    <label for="lname">Email</label>
    <input type="text"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

    <label for="lname">Number</label>
    <input type="text" name="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>

    <button style={{fontSize:30, marginLeft:120,backgroundColor:'green'}} onClick={handleupdate}>  Update</button>
  </form>

    </div>
  )
}
