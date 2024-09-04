import React, { useState } from 'react'
import './Navbar.css'
import { CiMenuFries } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  let [open,setOpen] = useState(false)
  let [search,setsearch] = useState(false)
  let [active, setActive] = useState(0)

  

  let NavLinks = [
    
    {
      Name: "Home",
      Link:"/"
    },
    {
      Name:"AllProducts",
      Link:"/Allproducts"

    }
  ]
  let NavsingleLink=(indexedDB)=>{
    // let selectNavlink = NavLinks.find((_,i)=>i ===indexedDB)
    // console.log(selectNavlink)
    setActive(indexedDB)
  }
  const NavList = (
    <ul className={`nav ${(!open)?"right-[-100%]":"right-[-10%]"}`}>
      <li onClick={()=>setOpen(!open)} className=' close xl:hidden md:hidden sm:block mx-3'>&times;</li>
      {NavLinks.map((v,i)=>{
       
        return(
          
          <li key={i} className='w-full text-center py-1  '>
            <Link to={v.Link} onClick={()=> NavsingleLink(i)} className={`${(active === i)?"text-orange-500":"text-[#000]"}  inline-block `}>{v.Name}</Link>
          </li>
        )
      })}
    </ul>
  );

  return (
    <>
    <section
    className="main  mx-auto  w-[100%] p-3 sticky top-0 bg-white z-10 px-3 "
    id="main"
  >
    <header className="container flex items-center  mx-auto w-[100%] h-[100%] justify-between">
      <div className="logos w-[100%] h-[2rem] flex gap-3  items-center md:basis-[20%] basis-[50%]">
        <img src="./img/logo.png" className="width-[100%] h-[100%]" alt="h" />
        <h1 className="logo text-[1rem]">Aswini Kumar.</h1>
      </div>
      {NavList }
      <form className={`form ${(!search)?"right-[-100%]":"right-[0%]"} `} role="search" >
        <div className=' h-[70px] w-full flex p-2 z-1 items-center '>
        <li onClick={() => setsearch(!search)} className=' mx-3'>
          &times;
        </li>

          <input
            className="border p-2 w-full"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn  bg-orange-600 w-[30%] hover:bg-orange-700 px-3  py-2 text-white"
            type="submit"
          >
            search
          </button>
        </div>
     </form>
     <span className={`serch ml-[30px] flex `}  onClick={()=>setsearch(!search)}><FaSearch />
      </span>
     <span className='text-[25px] cursar-poiter ' onClick={()=>setOpen(!open)}><CiMenuFries />
     </span>

    </header>
  </section>
  </>
  )
}
