import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteGymInfo = () => {
    const navigate=useNavigate();
    const{id}=useParams();

    const handleDeleteGymInfo=()=>{
        axios
        .delete(`http://localhost:8888/gym/${id}`)
        .then(()=>{
            navigate('/home');
        })
        .catch(()=>{
          console.log(error);
        });
    }
  return (
    <div className="container-fluid h-screen px-3 py-5 bg-slate-100 w-full">
          <div className="flex flex-col justify-center items-center h-4/5 w-full bg-slate-400">
            <h5>Are you sure you want to delete the gym-info?</h5>
            <button className="btn btn-sm text-white border-2 px-2 py-2
              bg-blue-700 rounded-md hover:scale-95 hover:border-blue-700
               hover:bg-white hover:text-black" type="button"
               onClick={handleDeleteGymInfo}>Yes,Delete it</button>
          </div>
     </div>
  )
}

export default DeleteGymInfo