import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='my-20'>
            <div className='text-center mb-8'>
                <p className='text-2xl font-bold text-orange-600 mb-3'>Service</p>
                <h2 className='text-5xl font-semibold mb-2'>Our Services Area</h2>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or Randomized <br /> words which don't look even slightly believable.
                </p>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='lg:w-[13%] lg:mx-auto w-[40%] mx-auto'>
                <button
                    className=' btn btn-outline border-2 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white hover:border-orange-600 mt-12'>
                    More Services
                </button>
            </div>
        </div>
    );
};

export default Services;