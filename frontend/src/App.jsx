import React from 'react'
import Header from './Componets/Header/Header'
import Footer from './Componets/Footer/Footer'
import Home from './Componets/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Course from './Componets/Pages/Course';
import About from './Componets/Pages/About';
import Contact from './Componets/Pages/Contact';
import SigIn from './Componets/SignIn/SigIn';
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/Course",
    element: <Course/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/signin",
    element: <SigIn/>,
  },
]);

function App() {
  return (
    <>
    <div className=' w-full h-full dark:bg-slate-900 dark:text-white'>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
    </div>
  </>
  )
}

export default App