import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import signupImg from '../../assets/others/authentication2.png';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User profile info updated');
                        //Create user in the database:
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log('user added in database');
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Created Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
            })
            .catch(error => console.error(error));
    }
    // console.log(watch("example"));

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero bg-amber-100 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={signupImg} alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h2 className="text-2xl font-bold text-center px-4 py-4">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" {...register("name", { required: true })} name='name' className="input" placeholder="Name" />
                                {errors.name && <span className='text-red-500'>This field is required</span>}

                                <label className="label">PhotoURL</label>
                                <input type="text" {...register("photoURL", { required: true })} name='photoURL' className="input" placeholder="PhotoURL" />
                                {errors.photoURL && <span className='text-red-500'>PhotoURL field is required</span>}

                                <label className="label">Email</label>
                                <input type="email" {...register("email", { required: true })} name='email' className="input" placeholder="Email" />
                                {errors.email && <span className='text-red-500'>This field is required</span>}

                                <label className="label">Password</label>
                                <input type="password" {...register("password", { minLength: 6, maxLength: 20 })} className="input" placeholder="Password" />
                                {errors.password?.type === "required" && (<p role="alert">Password is required</p>)}
                                {errors.password?.type === "minLength" && (<p className='text-red-500'>Password must be 6 characters</p>)}
                                {errors.password?.type === "maxLength" && (<p className='text-red-500'>Password must be less than 20 characters</p>)}
                                <input className="btn btn-neutral mt-4 bg-gradient-to-r from-orange-400 to-yellow-400 text-black border-none" type="submit" value="Sign Up" />
                            </fieldset>
                            <div className='text-center'>
                                <p><small>Already registered? <Link to="/login">Go to login</Link></small></p>
                                <p>Or sign up with</p>
                            </div>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;