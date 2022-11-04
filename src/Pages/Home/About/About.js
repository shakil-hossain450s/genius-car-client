import React from 'react';
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img
                        src={person}
                        className="rounded-lg w-4/5 h-4/5 shadow-2xl"
                        alt='' />
                    <img
                        src={parts}
                        className="absolute right-5 top-1/2 rounded-lg w-6/12 shadow-2xl border-8 border-white"
                        alt='' />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold text-orange-600'>About Us</p>
                    <h1 className="text-5xl font-bold my-5">
                        <span>
                            We are qualified <br />
                            & of experience <br />
                            in this field
                        </span>
                    </h1>
                    <p className="py-5 font-thin">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                    </p>
                    <p className="py-5 font-thin">
                        the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
                    </p>
                    <button
                        className='bg-orange-600 px-5 py-3 text-white font-semibold rounded-md hover:bg-orange-700 mr-5'>
                        Get More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;