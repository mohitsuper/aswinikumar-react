import React from 'react'

export default function Products({ProductData}) {
  // let Product = ProductData.filter((_, id) => id < 3);
  console.log(ProductData)  
  return (
    <>
    {
        ProductData.map((v,i)=>{
          return(
            <div class="border flex flex-col p-2 rounded-[5px] w-[90%] " key={i}>
                <img src={v.Image} className=' h-[250px]' alt=""/>
                <div class=" text-[#333] ">
                    <h4 className='font-bold'>{v.Name}</h4>
                    <h4 >
                        <ion-icon name="star" role="img" class="md hydrated"></ion-icon>
                        <ion-icon name="star" role="img" class="md hydrated"></ion-icon>
                        <ion-icon name="star" role="img" class="md hydrated"></ion-icon>
                        <ion-icon name="star" role="img" class="md hydrated"></ion-icon>
                        <ion-icon name="star" role="img" class="md hydrated"></ion-icon>
                    </h4>

                    <p className='font-[500] text-[#444]'>{v.Description}</p>
                    <h5 className='font-semibold'>&#9777;1000</h5>

                </div>
                <a href="#">
                    <ion-icon name="bag-add-outline" role="img" class="md hydrated"></ion-icon>
                </a>
            </div>
          )  
        })
    }
    </>
    
  )
}
