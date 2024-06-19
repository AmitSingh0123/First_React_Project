import React, { useState } from "react";
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className={`modal-box bg-white text-black`}>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
           
            <a href="/home" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 tsdfg" onClick={()=>setLogin(true)}>
              ✕
            </a>
          
          <h3 className="font-bold text-2xl">LogIn</h3>
          {errors.exampleRequired && <span className="text-black">This field is required</span>}
          <div className="px-5 py-5">
            <div>
              <p className="mb-2">Email</p>
              <input type="Email"  placeholder="Enter Your Email" className="px-3 py-2 w-full bg-white border-2 rounded"
             {...register("Email", { required: true })}/>
              {errors.email && <span className="text-red-400 font-bold text-sm">This field is required</span>}
            </div>
            <div>
            <p className="mt-4">Password</p>
            <input type="password"  placeholder="Enter Your Password" className="px-3 py-2 w-full bg-white border-2 rounded"{...register("password", { required: true })}/>
            {errors.password && <span className="text-red-400 font-bold text-sm">This field is required</span>}
            </div>
            <div className="flex items-center justify-between mt-5 gap-3">
              <button className="w-full bg-pink-500 text-white py-2 f  font-bold" type="submit">LogIn</button>
              <a href="/signin" className="underline text-blue-500 text-xl">SignIn</a>
            </div>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
