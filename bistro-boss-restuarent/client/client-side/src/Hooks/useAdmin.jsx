import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            console.log("👑 isAdmin from backend:", res.data);
            return res.data?.admin;
        }
    });
    console.log("📦 Final isAdmin:", isAdmin);
    return [isAdmin, isAdminLoading];
};

export default useAdmin;