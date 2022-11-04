import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/");

            })
            .catch(err => console.log(err));
    }

    return (
        <div className="hero my-12">
            <div className="hero-content lg:grid grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4 mx-auto' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center my-5 font-bold">Sign Up now!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn border-2 border-orange-600 bg-orange-600 hover:bg-orange-700 hover:border-orange-700' value="Signup" />
                        </div>
                        <p className='text-center'>Have an account? <Link to="/login" className='text-center text-orange-600 font-bold'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;