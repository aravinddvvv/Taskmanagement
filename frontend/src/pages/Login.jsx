import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='h-[98vh] flex items-center justify-center'>
            <div className='p-4 w-1/4 rounded bg-gray-800'>
                <div className="flex justify-center items-center text-2xl font-semibold">Login</div>
                <input type='username' name='username' placeholder='Username' className='bg-gray-700  rounded px-3 py-2 my-3 w-full border border-gray-400' />
               
                <input type='password' name='password' placeholder='Password' className='bg-gray-700  rounded px-3 py-2 my-3 w-full border border-gray-400' />
                <div className="flex justify-center items-center">
                    <button className='px-3 py-2 bg-blue-500 rounded text-black font-semibold mt-5'>Login</button><br/>
                   
                </div>
                <div className="flex justify-center items-center p-4">
                <Link to='/signup'className='text-gray-400 hover:text-blue-500'>Not having an account ? Signup</Link>
                </div>
            </div>
        </div>
  )
}

export default Login