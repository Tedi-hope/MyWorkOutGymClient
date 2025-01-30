import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="container-fluid p-3 mx-1">
        <div className="flex justify-between items-center ">
          <div className="ml-1">
             <h1 className="text-2xl font-bold uppercase">My WorkOut GYM</h1>
          </div>
          <div className="mx-2 text-lg">
            <Link to='/' className="hover:text-orange-600">Login</Link>
            <Link to='/signup' className="ml-4 hover:text-orange-600">SignUp</Link>
          </div>
        </div>
    </div>
  )
}

export default Nav