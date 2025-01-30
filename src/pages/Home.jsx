import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { MdOutlineDelete } from 'react-icons/md';


const Home = () => {
  return (
    <>
      <div className="container-fluid p-3">
        <div className="flex justify-between items-center ">
          <div className="">
             <h1 className="text-2xl font-bold uppercase">My WorkOut GYM</h1>
          </div>
          <div className="flex ">
            <p className="text-black text-base">amhopefule07@gmail.com</p>
            <button className="ml-10 btn btn-sm border-2 px-2 py-1 border-blue-400 
            rounded-md hover:scale-95 hover:bg-blue-700 hover:border-black hover:text-white" type="button">Log Out</button>
          </div>
        </div>
    </div>

    <div className=" container-fluid h-screen px-3 py-5 bg-slate-100">
        <div className="relative flex justify-between space-x-14 space-y-0 p-4 w-full">
          <div className="flex flex-col space-y-10 w-4/5">
           <div className="flex justify-between  p-4  bg-white ">
              <div className="flex flex-col">
                <h3 className="text-violet-600 font-bold">PushUps</h3>
                <p>Load(Kg):0</p>
                <p>Preps:10</p>
                <p>Less than a minute ago</p>
              </div>
              <div className="flex items-start">
                <h3>Delete</h3>
              </div>
           </div>
         </div>
           <div className="relative w-1/5  px-3 py-4 -top-5">
             <h3 className="text-center mb-2 font-bold">Add a New Workout</h3>
             <label>Exercisesize Title:</label><br />
             <input type="text" className="py-1 mb-7 mt-2" /><br />
             <label>Load(in Kg):</label><br />
             <input type="text" className="py-1 mb-7 mt-2" /><br />
             <label>Preps:</label><br />
             <input type="text" className="py-1 mb-7 mt-2" /><br />
             <button className="btn btn-sm text-white border-2 px-2 py-2
              bg-blue-700 rounded-md hover:scale-95 hover:border-blue-700 hover:bg-white hover:text-black" type="button">Add Workout</button>
           </div>
        </div>

    </div>

    </>
  )
}

export default Home