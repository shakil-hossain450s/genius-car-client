import React from 'react';
import "./BannerItem.css";

const BannerItem = ({ slider }) => {

    const { image, id, prev, next } = slider;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="carousel-image">
                <img src={image} alt="" className="w-[100vw] rounded-xl h-[80vh] object-cover" />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-20 top-1/4">
                <h1 className='text-6xl font-bold mb-5 text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-20 top-2/4">
                <p className='text-[18px] text-white w-1/2'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-20 top-3/4">
                <button
                    className='bg-orange-600 px-5 py-3 text-white font-semibold rounded-md hover:bg-orange-700 mr-5'>
                    Discover More
                </button>
                <button
                    className='bg-transparent px-5 py-3 text-white font-semibold rounded-md border-2 border-white hover:bg-gray-200 duration-200 ease hover:text-black'>
                    Latest Project
                </button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="bg-orange-600 border-0 hover:bg-gray-200 hover:text-black btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="bg-orange-600 border-0 hover:bg-gray-200 hover:text-black btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;