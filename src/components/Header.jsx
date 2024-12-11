import React from 'react'
import HeaderItem from './HeaderItem'
import HeaderForm from './HeaderForm'

const Header = () => {
  return (
    <div className="w-[100%] h-full  py-10 ">
      <HeaderItem/>
      <div className='bg-green-600/40 h-full'>
        <HeaderForm />
      </div>
    </div>
  )
}

export default Header