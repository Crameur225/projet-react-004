import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-green-500 text-white py-10'>
      <div className='flex flex-wrap justify-around gap-10 items-center py-4'>
        <div className='w-80'>
        <a href="/" className="text-2xl font-bold text-blue-500">MaisonChap</a>
        <p>L'utilisation de ce site Internet implique l'acceptation
des Conditions générales et du règlement sur 
le Respect de la vie privée.</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, <br />
          politique de confidentialite</p>
        </div>
        <div>
          <p>Contactez nous</p>
          <div className='flex justify-center items-center gap-3'>
            <p className='p-2 bg-white text-green-600 rounded-2xl'><FaGoogle/></p>
            <p className='p-2 bg-white text-green-600 rounded-2xl'><FaFacebook/></p>
            <p className='p-2 bg-white text-green-600 rounded-2xl'><FaInstagram/></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer