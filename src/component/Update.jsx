import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => state.app); 

  
  



  useEffect(() => {
    if(id){
   const singleUser = users.filter((ele) => ele.id ===id);
   setUpdateData(singleUser[0]); 
    }
   }, [id, users]);
   

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <h2 className="my-2">Edit the Data</h2>
      <form className="   w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <div className="mb-3  ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updateData && updateData.name}
            id="exampleInputEmail1"
            onChange={newData}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3  ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updateData && updateData.email}
            id="exampleInputEmail1"
            onChange={newData}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={updateData && updateData.age}
            onChange={newData}
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            type="radio"
            value="Male"
            checked={updateData && updateData.gender === "Male"}
            onChange={newData}
            id="flexRadioDefault1"
            required
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            type="radio"
            value="Female"
            checked={updateData && updateData.gender === "Female"}
            onChange={newData}
            id="flexRadioDefault2"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
