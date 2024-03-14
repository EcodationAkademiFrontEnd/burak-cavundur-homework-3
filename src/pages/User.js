import React from "react";
import { Table } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {});
  }, []); // Only re-run the effect if count changes

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id} className="table-link">
                <td>{user.id}</td>
                <Link to={"/UserDetail/" + user.id}>
                  <td>{user.name}</td>
                </Link>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default User;
