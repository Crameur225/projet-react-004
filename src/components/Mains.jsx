import React, { useState } from 'react'
import MainCard from './MainCard'
import Products from './products';

const Mains = () => {
  return (
    <div className='flex flex-wrap justify-center gap-8 items-center'>
        {Products.map((produt, key)=>(
           <MainCard key={key} data={produt} />
        ))}
        
    </div>
  )
}

export default Mains