import React from 'react'
import { CgNotes } from "react-icons/cg";
import { BiTask } from "react-icons/bi";
import { FaCheckDouble } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import { Link } from 'react-router-dom';

const Slidebar = () => {
    const data = [
        {
            title: "All tasks",
            icons:<CgNotes />,
            link:"/",

        },
        {
            title: "Important tasks",
            icons:<BiTask />,
            link:"/importanttask",

        },
        {
            title: "Completed tasks",
            icons:<FaCheckDouble />,
            link:"/completedtask",

        },
        {
            title: "Incompleted tasks",
            icons:<MdOutlinePendingActions />,
            link:"/incompletedtask",

        },
    ]
    return (
        <>
            <div>
                <h2 className='text-xl font-semibold'>Aravind v</h2>
                <h4 className='mb-1 text-gray-400'>aravindv9501@gmail.com</h4>
                <hr />
            </div>
            <div className='flex flex-col justify-between gap-4'>
                {data.map((items, i) => (
                    <Link to={items.link}
                    key={i}
                     className='my-4 flex gap-4 items-center hover:bg-black p-2 rounded transition-all duration-300'>
                        {items.icons}{items.title}
                    </Link>
                ))}
            </div>
            <div>
                <button className='bg-gray-600 w-full p-2 rounded hover:bg-blue-700'>Logout</button>
            </div>
        </>


    )
}

export default Slidebar