import React from 'react'
import './Addcontact.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Showcontact from './Showcontact';

export default function Addcontact() {
  
  const navigate=useNavigate();


  return (
   <>

 <button className='btn'> <Link to="/add">Add Contact</Link></button> 
   </>
  )
}
