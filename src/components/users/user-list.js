import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api/user-api";

import "./user-list.css";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Nick name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td className="action-btn">
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
