import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                
            })
            .catch(error => console.error(error));
    }
    // console.log(watch("example"));

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" {...register("name", { required: true })} name='name' className="input" placeholder="Name" />
                                {errors.name && <span className='text-red-500'>This field is required</span>}
                                <label className="label">Email</label>
                                <input type="email" {...register("email", { required: true })} name='email' className="input" placeholder="Email" />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                                <label className="label">Password</label>
                                <input type="password" {...register("password", { minLength: 6, maxLength: 20 })} className="input" placeholder="Password" />
                                {errors.password?.type === "required" && (<p role="alert">Password is required</p>)}
                                {errors.password?.type === "minLength" && (<p className='text-red-500'>Password must be 6 characters</p>)}
                                {errors.password?.type === "maxLength" && (<p className='text-red-500'>Password must be less than 20 characters</p>)}
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <input className="btn btn-neutral mt-4" type="submit" value="Sign Up" />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;