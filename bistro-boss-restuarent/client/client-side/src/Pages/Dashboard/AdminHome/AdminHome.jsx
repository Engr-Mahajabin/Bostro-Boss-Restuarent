import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import { GrDeliver } from "react-icons/gr";
import { BiSolidFoodMenu } from "react-icons/bi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Pie, PieChart, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {}, error: statsError } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            console.log('admin-stats response:', res.data);
            return res.data;
        },
        onError: (error) => {
            console.error('admin-stats error:', error);
        }
    });

    const { data: chartData = [], error: chartError } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            console.log('order-stats response:', res.data);
            return res.data;
        }, onError: (error) => {
            console.error('order-stats error:', error);
        }
    })

    // // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })


    return (
        <div>
            <h2 className='text-3xl'>
                <span>Hi, Welcome Back! </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>

            <br />

            <div className="flex flex-wrap gap-4 stats shadow p-4">
                <div className="stat bg-white p-4 rounded-lg flex-1">
                    <div className="stat-figure text-orange-500">
                        <FaDollarSign className='text-3xl' />
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats?.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat bg-white p-4 rounded-lg flex-1">
                    <div className="stat-figure text-orange-500">
                        <FaUsers className='text-3xl' />
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats?.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat bg-white p-4 rounded-lg flex-1">
                    <div className="stat-figure text-orange-500">
                        <BiSolidFoodMenu className='text-3xl' />
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats?.menuItems}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat bg-white p-4 rounded-lg flex-1">
                    <div className="stat-figure text-orange-500">
                        <GrDeliver className='text-3xl' />
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats?.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-8 justify-center items-center">
                {/* Bar chart */}
                <div className="flex-1 flex justify-center">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar
                            dataKey="quantity"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                            label={{ position: 'top' }}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                {/* Pie chart */}
                <div className="flex-1 flex justify-center">
                    <PieChart width={350} height={350}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={100} // slightly bigger radius
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend
                            verticalAlign="bottom"
                            align="center"
                            iconSize={10}
                            layout="horizontal"
                            wrapperStyle={{ marginTop: 10 }}
                        />
                    </PieChart>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;