import React from 'react'
import './ProductDesribe.css'

export default function ProductDesribe() {
  return (
    <section className="fetures container px-2 mx-auto  my-5">
  <div className="feture container mx-auto grid sm:grid-cols-3 grid-cols-2 gap-3  ">

    <div className="new-box">
      <img src="images/bennar/b18.jpg" alt="images/s/f1.png"/>
    <div className="text-btu">
   <h1>summer anime t-shirt</h1>
   <h3>sale 50% off</h3>
   <button className="button-white" type="submit">shop now</button> 
 </div>
 </div>

    <div className="new-box">
      <img src="images/bennar/b17.jpg" alt="images/s/f1.png"/>
      <div className="text-btu">
        <h1>summer anime t-shirt</h1>
        <h3>sale 50% off</h3>
        <button className="button-white" type="submit">shop now</button>
      </div>
      
    </div>
    <div className="new-box ">
        <img src="images/bennar/b10.jpg" alt="images/s/f1.png"/>
        <div className="text-btu">
      <h1>summer anime t-shirt</h1>
      <h3>sale 50% off</h3>
    </div>

      </div>
      <div className="new-box">
        <img src="images/bennar/b7.jpg" alt="images/s/f1.png"/>
        
        <div className="text-btu">
          <h1>summer anime t-shirt</h1>
          <h3>sale 50% off</h3>
        </div>
        
      </div>
      <div className="new-box ">
        <img src="images/bennar/b20.jpg" alt="images/s/f1.png"/>
        
        <div className="text-btu">
      <h1>summer anime t-shirt</h1>
      <h3>sale 50% off</h3>
    </div>
    
      </div>
  </div>


</section>

  )
}
