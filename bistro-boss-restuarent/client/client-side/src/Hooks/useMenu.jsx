// Using Custom Hook:
// import { useEffect, useState } from "react";

// const useMenu = () => {
//     const [menu, setMenu] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch('http://localhost:5000/menu')
//             .then(res => res.json())
//             .then(data => {
//                 setMenu(data);
//                 setLoading(false);
//             });
//     }, []);
//     return [menu, loading];
// }

// export default useMenu;

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';


//Using TanStack Query:
const useMenu = () => {
    const axiosSecure = useAxiosSecure();

    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menu');
            return res.data;
        }
    });

    return [menu, loading, refetch];
}

export default useMenu;
