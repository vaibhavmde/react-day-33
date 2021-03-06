import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import axios from "axios";

// AddUser Component
export const AddUser = () => {
  let navigate = useNavigate(); //to navigate to home page

  //created a state user
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    EmpID: "",
    City: ""
  });

  //destructuring of Object
  const { Firstname, Lastname, EmpID, City } = user;

  //OnInput function to take values of user
  const onInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">AddUser</h1>
      <form
        className="d-flex flex-column m-2 "
        onSubmit={(e) => {
          e.preventDefault();
          //adding the user to API
          axios.post(`https://6232374fc5ec1188ad2dacbe.mockapi.io/users`, user);
          //Navigating back to Home
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
            ADD
          </Button>
        </div>
      </form>
    </div>
  );
};
