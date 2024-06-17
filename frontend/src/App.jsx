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
const router = createBrowserRouter([
  {
    path: "/Home",
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
]);

function App() {
  return (
    <>
    <div className='bg-white w-full h-full'>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
    </div>
  </>
  )
}

export default App