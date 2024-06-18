import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import axios from 'axios';

const Inputdata = ({ isVisible, setIsVisible, addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/tasks', { title, description });
            addTask(response.data);
            setIsVisible(false);
        } catch (err) {
            console.error('Error adding task:', err);
        }
    };

    return (
        <>
            {isVisible && (
                <>
                    <div className="fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full"></div>
                    <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full">
                        <div className='w-1/4 bg-gray-900 p-4 rounded'>
                            <div className='flex justify-end'>
                                <button className='text-2xl' onClick={() => setIsVisible(false)}>
                                    <IoIosCloseCircleOutline />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type='text'
                                    placeholder='Title'
                                    name='title'
                                    className='px-3 py-2 rounded my-3 w-full bg-gray-800 border border-gray-400'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <textarea
                                    name="desc"
                                    cols="30"
                                    rows="10"
                                    placeholder='Description...'
                                    className='px-3 py-2 rounded w-full bg-gray-800 my-4 border border-gray-400'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                                <div className="flex justify-center items-center">
                                    <button type="submit" className='px-3 py-2 bg-blue-400 rounded text-black font-semibold'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Inputdata;
