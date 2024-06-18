import React, { useState, useEffect } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import axios from 'axios';

const Cards = ({ home, setIsVisible }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/tasks');
                setTasks(response.data);
            } catch (err) {
                console.error('Error fetching tasks:', err);
            }
        };
        fetchTasks();
    }, []);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div className='grid grid-cols-4 gap-4 p-4'>
            {tasks && tasks.map((task, i) => (
                <div key={i} className='flex flex-col justify-between bg-gray-800 p-4 rounded'>
                    <div>
                        <h3 className='text-xl font-semibold'>{task.title}</h3>
                        <p className='text-gray-400 my-2'>{task.description}</p>
                    </div>
                    <div className='mt-4 w-full flex items-center'>
                        <button className={`${task.status === "Incomplete" ? " bg-red-500" : "bg-green-600"} p-2 rounded`}>
                            {task.status}
                        </button>
                        <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
                            <button><IoIosHeartEmpty /></button>
                            <button><FaRegEdit /></button>
                            <button><MdOutlineDeleteOutline /></button>
                        </div>
                    </div>
                </div>
            ))}
            {home === "true" && (
                <button
                    className='flex flex-col justify-center items-center bg-gray-800 p-4 rounded hover:scale-105 hover:cursor-pointer transition-all duration-300'
                    onClick={() => setIsVisible("fixed")}
                >
                    <IoAddCircleOutline className='text-4xl' />
                    <h2 className=' text-gray-400'>Add Task</h2>
                </button>
            )}
        </div>
    );
};

export default Cards;
