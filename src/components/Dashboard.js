import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
              label: 'Weekly Sales',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: 'rgba(75,192,192,1)',
              borderWidth: 4
          }]
        });
    };

    useEffect(() => {
        chart();
    }, []);

    return (
        <div className="dashboard">
            <h1>Sales Analytics</h1>
            <Bar data={chartData} options={{ responsive: true }} />
        </div>
    );
};

export default Dashboard;
