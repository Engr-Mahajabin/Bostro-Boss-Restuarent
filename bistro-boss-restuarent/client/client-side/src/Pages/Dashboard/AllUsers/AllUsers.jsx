import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitles from '../../../Components/SectionTitles';

const AllUsers = () => {

    // We don't want to see all the users in the dashboard to all users:
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now an Admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUsers = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div>
            <div>
                <SectionTitles heading="Manage All Users" subHeading="How Many?"></SectionTitles>
                <h2 className='text-3xl p-6'>Total Users: {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full bg-gray-100">
                    {/* head */}
                    <thead className='bg-orange-400 text-black'>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>{user.email}</td>

                                    <th>
                                        {
                                            user.role === 'admin' ? 'Admin' : <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-lg bg-orange-500">
                                                <FaUsers className=' text-white'></FaUsers>
                                            </button>
                                        }
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => handleDeleteUsers(user._id)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrash className='text-orange-500'></FaTrash>
                                        </button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;