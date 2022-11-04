import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, img, title, price } = service;

    return (
        <div className="card lg:w-96 w-11/12 mx-auto bg-base-100 shadow-xl">
            <figure>
                <img
                    src={img}
                    className='w-11/12 h-[210px] border-2 p-2'
                    style={{ borderRadius: "15px" }}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end relative">
                    <Link to={`/services/${_id}`}>
                        <button
                            className="absolute bottom-0 right-0 border-2 p-5 rounded-full hover:bg-gray-300 duration-150 ease">
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;