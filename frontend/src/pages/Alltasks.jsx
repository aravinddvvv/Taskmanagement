import React, { useState } from 'react'
import Cards from '../components/Home/Cards'
import { IoIosAddCircle } from "react-icons/io";
import Inputdata from '../components/Home/Inputdata';

const Alltasks = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div>
                <div className='w-full flex justify-end px-4 py-2'>
                    <button onClick={() => setIsVisible(true)}>
                        <IoIosAddCircle className='text-4xl hover:text-gray-300 transition-all duration-300' />
                    </button>
                </div>
                <div><Cards home={"true"}  setIsVisible={setIsVisible} /></div>
            </div>
            <Inputdata isVisible={isVisible} setIsVisible={setIsVisible} />
        </>
    )
}

export default Alltasks;
