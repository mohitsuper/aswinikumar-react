import React from 'react'
import  '../../App.css'

let category = [
    {
        Name:"T-shirt",
        Image:"./img/category/1.jpg"
    },
    {
      Name:"shose",
      Image:"./img/category/2.jpg"
    },
    {
      Name:"bag",
      Image:"./img/category/3.jpg"
    },
    {
      Name:"cap",
      Image:"./img/category/5.jpg"
    },
    {
      Name:"winter jaket",
      Image:"./img/category/6.jpg"
    },
]
export default function Category() {
  return (
    <>
    <h1 className='heading'>Category</h1>
    <div className='flex  container mx-auto px-2 text-center overflow-scroll justify-center items-center'>
      {
        category.map((v,i)=>{
          return(
            <div key={i} className='flex justify-center '>
              <div className='w-[40%] '>
                <img src={v.Image} alt="" className='w-full'/>
                <p>{v.Name}</p>
              </div>
            </div>
        )
      })
    }
    </div>
    </>
  )
}
