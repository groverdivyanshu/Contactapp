import React, { useState } from 'react'
import './Add.css';
import { useSelector } from 'react-redux';
import { contactSelector } from '../redux/Contactreducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { actions } from '../redux/Contactreducer';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

//Add conatct by this fucntion
export default function Add() {

  const navigate=useNavigate();
  const contact=useSelector(contactSelector);
  const disptach=useDispatch();

    const[formdata,setFormdata]=useState({
      id:contact[contact.length-1].id+1,
        name:'',
        email:'',
        number:'',
    })
function handledata(event)
{
  
setFormdata({
  ...formdata,
  [event.target.name]:event.target.value

})
  }

function handlecontact(e)
{
  console.log(formdata);
  e.preventDefault();
  if(!formdata.email||!formdata.name||!formdata.number)
  {
    toast.warn("please add all details",
  {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
);
return;
  }

  const checkemail=contact.find((contact)=>{
    if(contact.email==formdata.email)
    return formdata.email;
  })
  if(checkemail)
  {  toast.warn("email id alreday exist",
  {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
);
return;
  }
  const checknumber=contact.find((contact)=>{
    if(contact.number==formdata.number)
    return formdata.number
  })
  if(checknumber)
  {
    toast.warn("phone alreday exist",
  {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
);
return;
  }
  //post the given form data to api 
async function data(){
  const response=await axios.post("https://jsonplaceholder.typicode.com/users",formdata);
  console.log("responseapi",response);
  disptach(actions.Addcontact(response.data));

}
 data();
 

toast.success(" contact Add sucessfully",
  {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
);
 
  navigate('/');

}
  return (
    <div>
        <h1 style={{marginLeft:700}}>Add to Contact</h1>
        <div className='box'>
Name
<br/>
    <input type='text' name='name' value={formdata.name} onChange={handledata}/>
<br/>
Email
<br/>
<input type='text' name='email' value={formdata.email} onChange={handledata}/>
<br/>
PhoneNumber
<br/>
<input type='text' name='number' value={formdata.number} onChange={handledata}/>

<button style={{marginLeft:200, marginTop:50,backgroundColor:'black',borderRadius:10}} 
onClick={handlecontact}
><p style={{color:'white'}}>Addcontact</p></button>
        </div>
        
        </div>
  )
}
