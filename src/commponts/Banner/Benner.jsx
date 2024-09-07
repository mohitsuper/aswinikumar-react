import React from 'react'

export default function Benner({Image}) {
  return (
    <div className='w-full flex justify-center my-5  h-[70%]'>
        <img src={Image} className='w-full h-[70%]' alt="" />
    </div>
  )
}
