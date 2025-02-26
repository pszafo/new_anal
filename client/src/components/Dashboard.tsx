import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dashboard-data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{data.message}</p>
      <div>
        <h2>Stats</h2>
        <ul>
          <li>Users: {data.stats.users}</li>
          <li>Churn Rate: {data.stats.churnRate}%</li>
          <li>Feature Requests: {data.stats.featureRequests}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
