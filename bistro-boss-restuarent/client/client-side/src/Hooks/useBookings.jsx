import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useBookings = () => {
    const axiosSecure = useAxiosSecure();
    const { data: bookings = [], refetch } = useQuery(['bookings'], async () => {
        const res = await axiosSecure.get('/bookings');
        return res.data;
    });
    return [bookings, refetch];
};

export default useBookings;
