import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email]);


    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete this order");
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success("Order Cancel Successfully");
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    };

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approval = orders.find(odr => odr._id === id)
                    approval.status = "Approved";

                    const newOrders = [approval, ...remaining];
                    setOrders(newOrders);
                }
            })
    }

    return (
        <div>
            <h2>This is Orders Page for{user?.email}</h2>
            <h2 className="text-4xl">You have {orders.length} orders</h2>
            <div className="overflow-x-auto w-full">
                {
                    orders.length === 0 ?
                        <h2 className='text-3xl text-center my-8' >There is No Order...
                            <Link className='text-blue-900 underline' to="/">Please Order Now...</Link>
                        </h2>
                        :
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <OrderRow
                                        key={order._id}
                                        order={order}
                                        handleDelete={handleDelete}
                                        handleStatusUpdate={handleStatusUpdate}
                                    ></OrderRow>)
                                }
                            </tbody>

                        </table>
                }

            </div>
        </div>
    );
};

export default Orders;