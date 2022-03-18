import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import IconButton from "@mui/material/IconButton";

// Navbar component
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h3 className="navbar-brand " id="react">
          React
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Link to Home */}
              <Link className="nav-link active" aria-current="page" to="/">
                <IconButton color="primary">
                  <HomeIcon />
                </IconButton>
              </Link>
            </li>
          </ul>
          {/* Add user button to link to addUser component */}
          <Link to="/adduser">
            <IconButton color="primary">
              <PersonAddAltIcon />
            </IconButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};
