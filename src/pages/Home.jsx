import React from 'react'


const Home = () => {
  return (
    <>
      <div className="container-fluid p-3 mx-1">
        <div className="flex justify-between items-center ">
          <div className="">
             <h1 className="text-2xl font-bold uppercase">My WorkOut GYM</h1>
          </div>
          <div className="mx-2 text-lg">
            <a href="" className="text-black">amhopefule07@gmail.com</a>
            <button className="ml-10 btn btn-sm border-1" type="button">Log Out</button>
          </div>
        </div>
    </div>

    <div className="container-fluid h-screen bg-slate-100">
        <h1 className="text-orange-600 text-4xl">Gym App</h1>
    </div>

    </>
  )
}

export default Home