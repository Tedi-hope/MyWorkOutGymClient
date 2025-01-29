import React from 'react'

const Nav = () => {
  return (
    <div className="container-fluid p-3 mx-1">
        <div className="flex justify-between items-center ">
          <div className="">
             <h1 className="text-2xl font-bold uppercase">My WorkOut GYM</h1>
          </div>
          <div className="mx-2 text-lg">
            <a href="" className="hover:text-orange-600">Login</a>
            <a href="" className="ml-4 hover:text-orange-600">Signup</a>
          </div>
        </div>
    </div>
  )
}

export default Nav