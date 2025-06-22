import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div className='p-6'>
            <div>
                <button onClick={handleGoogleSignIn} className="btn bg-black text-white border-[#e5e5e5]">
                    <FaGoogle className='m-2'></FaGoogle>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;