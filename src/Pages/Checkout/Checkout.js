import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, img, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || "unregistered";
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price: price,
            customer: name,
            phone,
            email,
            message,
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Order Placed Successfully");
                    form.reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='mb-20'>
            <div className='relative mb-12'>
                <div className="carousel-image">
                    <img src={img} alt="" style={{ width: "100%", height: "50vh", objectFit: "cover" }} className="rounded-xl" />
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-20 top-2/4 p-5">
                    <h1 className='text-4xl font-bold text-white'>
                        Checkout
                    </h1>
                </div>
            </div>
            <div>
                <h2
                    className='text-2xl font-bold'>You are about to order:
                    <span
                        className='text-orange-600'> {title}
                    </span>
                </h2>
                <p className='text-xl font-bold'>Price: <span className='text-orange-600'>${price}</span></p>
            </div>

            <div className='bg-gray-200 px-16 py-20 rounded-lg mt-8'>
                <form onSubmit={handlePlaceOrder}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <input name="firstName" type="text" placeholder="First Name" className="input w-full" />
                        <input name="lastName" type="text" placeholder="Last Name" className="input w-full" />
                        <input name="phone" type="text" placeholder="Your Phone" className="input w-full" />
                        <input name="email" type="text" defaultValue={user?.email} placeholder="Your Email" className="input w-full" />
                    </div>
                    <textarea name="message" className="textarea h-52 w-full my-5" placeholder="Your Message"></textarea>
                    <div>
                        <input
                            type="submit"
                            value="Order Confirm"
                            className='btn bg-orange-600 border-0 hover:bg-orange-700 w-full'
                        />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Checkout;