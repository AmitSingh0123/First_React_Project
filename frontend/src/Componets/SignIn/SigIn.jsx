import React from 'react'


function SigIn() {
  return (
    <div className='w-full h-screen'>
      <div className='flex items-center justify-center h-full'>
      <div className="modal-box bg-white text-black">
          <form method="dialog">
            <a href='/home' 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </a>
          </form>
          <h3 className="font-bold text-2xl">SignIn</h3>
          <div className="px-5 py-5">
            <div>
              <p className="mb-2">Email</p>
              <input type="Email" placeholder="Enter Your Email" className="px-3 py-2 w-full bg-white border-2 rounded"/>
            </div>
            <div>
            <p className="mt-4">Password</p>
            <input type="Email" placeholder="Enter Your Password" className="px-3 py-2 w-full bg-white border-2 rounded"/>
            </div>
            <div className="flex items-center justify-between mt-5 gap-3">
              <button className="w-full bg-pink-500 text-white py-2 f  font-bold">SignIn</button>
              <button 
               onClick={()=>document.getElementById('my_modal_3').showModal()}
              className="underline text-blue-500 text-xl"
              >LogIn</button>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default SigIn