import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {

const [users, setUsers] = useState({});
const navigate=useNavigate();
const dispatch=useDispatch();

const getUserData=(e)=>{
    setUsers({...users, [e.target.name]: e.target.value});
    console.log(users); 
};

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("users...",users);
    dispatch(createUser(users));
    navigate("/read")
}


  return (
    <div >
      <form className='   w-50 mx-auto my-5' onSubmit={handleSubmit}>
  <div className="mb-3  ">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" name="name" className="form-control" id="exampleInputEmail1" onChange={getUserData} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3  ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" onChange={getUserData} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
    <input type="number" name="age" className="form-control" onChange={getUserData} id="exampleInputPassword1"/>
  </div>
 
  <div className="mb-3">
  <input className="form-check-input" name="gender" type="radio"  value="Male" onChange={getUserData} id="flexRadioDefault1" required/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Male
  </label>
</div>
<div className="mb-3">
  <input className="form-check-input" name="gender" type="radio"  value="Female" onChange={getUserData} id="flexRadioDefault2" />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Female
  </label>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Create
