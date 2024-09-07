import React from 'react'

export default function QuerySection() {
  return (
<section className="news ">
  <div className="new bg-[url('images/bennar/y4.JPG')] h-[20rem] bg-cover bg-center flex justify-center items-center  flex-row justify-around gap-3 text-2xl text-white flex-col md:flex-row px-3">

   <div className=" flex gap-2 flex-col">
     <h1>up to 70% off all product
     </h1>
     <p>get new summber product information in fast <span className="text-orange-700">sing in</span></p>
   </div> 

<div className="sing-in flex   gap-1">
  <input type="email" placeholder="your  email" className="p-3 text-[#333] rounded-l-lg"/>
  <button type="submit" className="bg-orange-600 hover:bg-orange-700 px-3 rounded rounded-r-lg">enter</button>

</div>

</div>
  
</section>
  )
}
