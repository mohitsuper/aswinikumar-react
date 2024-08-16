import React, { useState } from 'react'
import './Navbar.css'
import { CiMenuFries } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  let [open,setOpen] = useState(false)
  let [search,setsearch] = useState(false)
  return (
    <section
    className="main  mx-auto  w-[100%] h-[5rem] sticky top-0 bg-white z-10 px-3 border rounded-b-lg border-bottom"
    id="main"
  >
    <header className="container flex     items-center justify-between	  mx-auto w-[100%] h-[100%]">
      <div className="logos w-[100%] h-[2rem] flex gap-3 basis-[40%]">
        <img src="./img/logo.png" className="width-[100%] h-[100%]" alt="h" />
        <h1 className="logo text-[1rem]">Aswini Kumar.</h1>
      </div>
      <nav
        className={`flex gap-5 w-[100%] xl:flex  items-center  s"m:flex justify-center"
        id="sidemenu basis-[45%] ${(open)?"right-0":"right-full"}`}
      >
       <span className='close ' onClick={()=>setOpen(!open)}>&times;</span>

        <a href="/">Home</a>
        <a className="active" href="/about">
          About
        </a>
        <a href="/shop">shop</a>
        <a href="/blog">blogs</a>
        <a href="/video">Video</a>
        <a href="/countect">Contect</a>
       
      </nav>
      <form className={` ${(!search)?"left-[-120%]":"left-[0px]"}`} role="search" onClick={()=>setsearch(!search)}>
        <div className='h-[70px] w-full flex p-2'>

          <input
            className="border p-2 w-full"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn  bg-orange-600 w-[30%] hover:bg-orange-700 px-3 text-white"
            type="submit"
          >
            search
          </button>
        </div>
     </form>
     <span className="serch ml-[30px]"  onClick={()=>setsearch(!search)}><FaSearch />
      </span>
     <span className='text-[25px] cursar-poiter' onClick={()=>setOpen(!open)}><CiMenuFries />
     </span>

    </header>
  </section>
  
  )
}
