import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import axios from "axios";

// Edit Component
export const Edit = () => {
  //created a state user
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    EmpID: "",
    City: ""
  });

  //Object destructuring
  const { Firstname, Lastname, EmpID, City } = user;

  const { u } = useParams();
  let navigate = useNavigate();

  //useEffect hook to render on change of u
  useEffect(() => {
    axios
      .get(`https://6232374fc5ec1188ad2dacbe.mockapi.io/users/${u}`)
      .then((response) => setUser(response.data));
  }, [u]);

  // OnInput function to take input from user
  const onInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Edit</h1>
      <form
        className="d-flex flex-column m-2 "
        onSubmit={(e) => {
          e.preventDefault();
          // Update the user to API
          axios.put(
            `https://6232374fc5ec1188ad2dacbe.mockapi.io/users/${u}`,
            user
          );
          //navigating back to Home
          navigate("/");
        }}
      >
        <FormControl>
          <TextField
            id="demo"
            focused
            color="primary"
            name="Firstname"
            value={Firstname}
            onChange={(e) => onInput(e)}
            label="FirstName"
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            id="demo"
            focused
            color="primary"
            name="Lastname"
            value={Lastname}
            onChange={(e) => onInput(e)}
            label="LastName"
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            focused
            color="primary"
            id="demo"
            type="number"
            name="EmpID"
            value={EmpID}
            onChange={(e) => onInput(e)}
            label="Employee ID"
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            id="demo"
            focused
            color="primary"
            name="City"
            value={City}
            onChange={(e) => onInput(e)}
            label="City"
          />
        </FormControl>
        <br />
        <br />
        <div className="d-flex justify-content-center">
          <Button type="submit" variant="contained" color="primary">
            Edit
          </Button>
        </div>
      </form>
    </div>
  );
};
