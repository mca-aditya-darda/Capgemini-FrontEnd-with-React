import React, { useEffect, useState } from "react";

const ApiCalling = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("https://api.github.com/users");
        let data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Calling</h1>
      {users.map((user) => (
        <p key={user.id}>
          {user.login} id = {user.id}
          <img src={user.avatar_url} alt={user.login} />
        </p>
      ))}
    </div>
  );
};

export default ApiCalling;
