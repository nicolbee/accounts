import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your account dashboard!</p>
      <p>You are logged in.</p>
      
      if (user) {
        <p>Welcome, {user.username}!</p>
      }
    
    </div>
  );
};

export default Dashboard;