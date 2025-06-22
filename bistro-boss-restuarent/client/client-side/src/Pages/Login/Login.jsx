import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login Successful",
                    showClass: {
                        popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
    `
                    },
                    hideClass: {
                        popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
    `
                    }
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <input className="btn btn-neutral mt-4" type="submit" value="Login" />
                            </fieldset>
                        </form>
                        <div className="divider">OR</div>
                        <SocialLogin></SocialLogin>
                        <div className='text-center'>
                            <p><small>New Here? <Link to="/signup">Create an account</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;




