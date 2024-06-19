import React, { useEffect, useState } from "react";
import Login from "../Login/Login";

function Header() {
  const [them ,setThem] = useState(localStorage.getItem('them')?localStorage.getItem('them'):'light')
  const element = document.documentElement;
  useEffect(()=>{
    if(them === 'dark'){
      element.classList.add('dark')
      localStorage.setItem("them" ,"dark")
      document.body.classList.add('dark')

    }else{
      element.classList.remove('dark')
      localStorage.setItem("them" ,"light")
      document.body.classList.remove('dark')
    }
    
  },[]);
  const navLinks = ["Home", "Course", "Contact", "About"];

  return (
    <header className="px-20 py-5 border-2 border-b-black fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex w-full h-full items-center justify-between ">
        <div>
          <a href="/home" className="text-blue-400 text-3xl font-extrabold">
            BookStore
          </a>
        </div>
        <nav className="flex items-center gap-10">
          <div>
            <ul className="flex items-center gap-8 font-bold text-black">
              {navLinks.map((link, index) => (
                <li key={index} onClick={() => {}}>
                  <a
                    href={link}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <a
              type="button"
              className="bg-red-600 px-4 py-2 rounded text-white border-none outline-none"
              onClick={()=>document.getElementById('my_modal_3').showModal()}
            >
              Login
            </a>
            <Login/>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={()=>setThem(them ==='light'?'dark':'light')}
                
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={()=>setThem(them==='dark'?'light':'dark')}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
