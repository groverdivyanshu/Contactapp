import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Showcontact.css"
import { useSelector } from 'react-redux';
import { contactSelector } from '../redux/Contactreducer';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/Contactreducer';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import { act } from 'react-dom/test-utils';
//display the llist of compoenent
export default function Showcontact() {
  
  
 const dispatch=useDispatch();

  const contact=useSelector(contactSelector);
 function handledelete(id)
 {
  dispatch(actions.Deletecontact(id));
  toast.success(" contact delete sucessfully",
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


 }


  return (
    //add button
    <div>
       <button className='btn'> <Link to="/add">Add Contact</Link></button>
       
       
<table className="table ">
  <thead>
    <tr>
      {/* heading of the conatct */}
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  
 
{contact.map((item,index)=>(
 


//display all contacts
  <tr key={index}>
    <td >{index+1}</td>
    <td >{item.name}</td>
    <td >{item.number}</td>
    <td >{item.email}</td>
  <td>
<button className='red'><Link to={`edit/${item.id}`} >Edit</Link></button>
<button className='blue'onClick={()=>handledelete(item.id)}>Delete</button>
</td>
</tr> 
 
  

))}
</table>




      

    </div>
  )
}
