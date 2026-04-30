import React, { useEffect, useState } from "react";
import "../App.css";

const ApiCalling = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("https://api.github.com/users");
        let data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>API Calling</h1>

      <div className="grid">
        {users.map((user) => (
          <div key={user.id} className="card">
            <img src={user.avatar_url} alt={user.login} />
            <h3>{user.login}</h3>
            <p>ID: {user.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiCalling;
