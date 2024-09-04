import React from 'react'
import  '../../../App.css'
import { ProductData } from '../../../data/ProductData/ProductData'
import Products from '../../Product/Products';


export default function NewProducts() {
  let ProductDat = ProductData.filter((_,i)=>i<3)
  return (
    <div>
        <h1 className='heading mt-3'>New Products</h1>
        <div className='grid px-3 container mx-auto  xl:grid-cols-3 md:grid-cols-3  grid-cols-2 gap-4 justify-center items-center'>
            <Products ProductData={ProductDat}  className="flex justify-center"/>
        </div>
    </div>
  )
}
