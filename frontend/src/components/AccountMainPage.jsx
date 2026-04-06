import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AccountMainPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Try to get user info from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div>
      <h2>Account Main Page</h2>
      {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          {user.email && <p>Email: {user.email}</p>}
        </>
      ) : (
        <p>Loading user info...</p>
      )}
      <p>From here, you can navigate to your dashboard, view your profile, or manage your settings.</p>
      <ul>
        <li><Link to="/dashboard">Go to Dashboard</Link></li>
        <li><Link to="/profile">View Profile</Link></li>
        <li><Link to="/settings">Manage Settings</Link></li>
      </ul>
    </div>
  );
};

export default AccountMainPage;