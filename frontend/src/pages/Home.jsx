import React from 'react'
import Slidebar from '../components/Home/Slidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex  h-[98vh] gap-3'>
      <div className=' bg-gray-900 w-1/6 border border-gray-400 p-4 rounded-md flex flex-col justify-between '><Slidebar/></div>
        <div className=' w-5/6 border border-gray-400 p-4 rounded-md '>
        <Outlet/>
        </div>

    </div>
  )
}

export default Home