import React from 'react';


const MainCard = (props) => {
    const {image, type, quartier, prix} = props.data
  return (
    <div className=''>
      <div className='shadow-xl rounded'>
       <img src={image} alt={type} className='w-[16em] h-[16em] rounded'/>
       <h2 className="font-['Merriweather',_serif] px-2 text-[-0.5em] pt-2">{type}</h2>
       <div className='flex justify-between items-center py-4'>
           <p className='font-medium text-blue-800 px-2'>{prix} XOF</p>
           <p className='px-2'>{quartier}</p>
       </div>
       <a href="#" className='text-green-600 flex justify-end items-center px-2 py-2'>Voir l'annonce</a>
      </div>
    </div>
  )
}

export default MainCard