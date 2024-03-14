import React from "react";
import { useParams, Link, parsePath } from "react-router-dom";
import User from "./User";
import { useState, useEffect } from "react";
import axios from "axios";

const UserDetail = () => {
  const [users, setUsers] = useState([]);
  const UserDetail = useParams();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
        console.log(result.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <div className="container user-detail-cont">
        {users.map((user) => {
          return user.id == UserDetail.id ? (
            <div className="row">
              <div>#{UserDetail.id}. User Details</div>
              <div className="col-12 user-detail-box">
                <div className="row">
                  <div className="col-5 user-detail-label">
                    <h5>Name</h5>
                  </div>
                  <div className="col-7 user-detail-info">
                    <h3>{user.name}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5 user-detail-label">
                    <h5>User Name</h5>
                  </div>
                  <div className="col-7 user-detail-info">
                    <h3>{user.username}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5 user-detail-label">
                    <h5>E-Mail</h5>
                  </div>
                  <div className="col-7 user-detail-info">
                    <h3>{user.email}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5 user-detail-label">
                    <h5>Company</h5>
                  </div>
                  <div className="col-7 user-detail-info">
                    <h3>{user.company.name}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5 user-detail-label">
                    <h5>Phone</h5>
                  </div>
                  <div className="col-7 user-detail-info">
                    <h3>{user.phone}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5 user-detail-label">
                    <h5>Web Site</h5>
                  </div>
                  <div className="col-7 user-detail-info">
                    <h3>{user.website}</h3>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <span></span>
          );
        })}
      </div>
      <Link to="../user">
        <button className="btn btn-secondary">Back</button>
      </Link>
    </div>
  );
};

export default UserDetail;
