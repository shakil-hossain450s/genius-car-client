import React from 'react';
import { FaCalendarAlt, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

const Address = () => {
    return (
        <div className='lg:grid grid-cols-3 flex flex-col gap-5 mx-5 justify-between lg:items-center bg-gray-900 text-white my-8 lg:p-16 p-5 items-start rounded-lg'>
            <div className='flex items-center'>
                <div className='text-3xl mr-3'>
                    <FaCalendarAlt></FaCalendarAlt>
                </div>
                <div>
                    <p className='lg:text-xl font-semibold'>We are open monday-friday</p>
                    <h3 className='lg:text-3xl text-2xl text font-semibold'>7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='text-3xl mr-3'>
                    <FaPhoneAlt></FaPhoneAlt>
                </div>
                <div>
                    <p className='lg:text-xl font-semibold'>Have a question?</p>
                    <h3 className='lg:text-3xl text-2xl text font-semibold'>+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='text-3xl mr-3'>
                    <FaLocationArrow></FaLocationArrow>
                </div>
                <div>
                    <p className='lg:text-xl font-semibold'>Need a repair? our address</p>
                    <h3 className='lg:text-3xl text-2xl text font-semibold'>Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Address;