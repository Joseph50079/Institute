import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';



const data = [
  { name: 'lvl 1', uv: 4000, pv: 2400, amt: 5.0 },
  { name: '2nd semester', uv: 3000, pv: 1398, amt: 3.5 },
  { name: 'lvl 2', uv: 2000, pv: 9800, amt: 2.0 },
  { name: '2nd semester', uv: 2780, pv: 3908, amt: 4.0 },
  { name: 'lvl 3', uv: 1890, pv: 4800, amt: 3.5 },
  { name: '2nd semester', uv: 2390, pv: 3800, amt: 3.0 },
  { name: 'lvl 4', uv: 3490, pv: 4300, amt: 4.5 },
  { name: '2nd semester', uv: 3490, pv: 4300, amt: 4.0 },
];

const yaxisValues = [5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.0];

const Charts = () => {
  return (
    <ResponsiveContainer width="100%" className='h-[200] sm:h-[400]'>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >

        <defs>
          <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(195,34,34,0.633)" stopOpacity={1} />
            <stop offset="100%" stopColor="rgba(15,0,187,1)" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis 
          ticks={yaxisValues}  // Set static tick values
          domain={[0, 5]}      // Adjust domain to match your range
          tickFormatter={(value) => `${value.toFixed(1)}`} // Format the label
        />
        <Tooltip />          
        <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="url(#gradientColor)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const StudentAnalytics = () => {
  return (
    <div className='bg-white p-6 rounded-[20px] shadow-xl '>
        <h1 className='font-bold text-xl pb-16 ml-5'> Exam Grade Statistics</h1>
        <div className="flex justify-center m-auto h-[200px] w-auto sm:h-[400]">
            <Charts />
        </div>
    </div>
  );
};

export default StudentAnalytics;
