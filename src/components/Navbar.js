import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul className="d-flex justify-content-center list-unstyled nav-bar">
        <NavLink
          to="home"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <li className="me-3">Home</li>
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <li className="me-3">About</li>
        </NavLink>
        <NavLink
          to="user"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              // fontWeight: isActive ? "bold" : "",
              // color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <li className="me-3">Users</li>
        </NavLink>
      </ul>
    </div>
  );
};
