import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLoginUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero my-12">
            <div className="hero-content lg:grid grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4 mx-auto' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center my-5 font-bold">Login now!</h1>
                    <form onSubmit={handleLoginUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn border-2 border-orange-600 bg-orange-600 hover:bg-orange-700 hover:border-orange-700' value="Login" />
                        </div>
                        <p className='text-center '>Already have an account? <Link to="/signup" className='text-orange-600 font-bold'>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;