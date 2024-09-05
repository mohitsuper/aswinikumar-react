import React from 'react'
import  '../../App.css'
import './Category.css'

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
      Name:"jaket",
      Image:"./img/category/6.jpg"
    },
]
// Update your Category component to use the new CSS classes
export default function Category() {
  return (
    <>
      <h1 className='heading'>Category</h1>
      <div className=' flex container mx-auto px-2 text-center overflow-scroll justify-center items-center gap-2 category-container '>
        {
          category.map((v, i) => {
            return (
              <div key={i} className='category-item-wrapper'>
              <div className='flex justify-center category-item'>
                <div className='w-[10rem]'>
                  <img src={v.Image} alt="" className='w-full'/>
                  <p>{v.Name}</p>
                </div>
              </div>
            </div>

            )
          })
        }
      </div>
    </>
  )
    
}
