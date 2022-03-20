import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Table } from "react-bootstrap";

// Users Component
export const Users = () => {
  //created a state user
  const [users, setUsers] = useState([]);

  //useEffect to render on update of users
  useEffect(() => {
    axios
      .get("https://6232374fc5ec1188ad2dacbe.mockapi.io/users")
      .then((response) => setUsers(response.data.reverse()));
  }, [users]);

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">User</h1>
      <Table striped hover variant="dark" responsive size="sm">
        <thead>
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">EmpID</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* maping the users  */}
          {users.map((e, i) => (
            <tr key={i} className="text-center">
              <td>{e.id}</td>
              <td>{e.Firstname}</td>
              <td>{e.Lastname}</td>
              <td>{e.EmpID}</td>
              <td>{e.City}</td>
              <td>
                {/*create a link to Edit */}
                <Link to={`/edit/${e.id}`}>
                  <IconButton color="primary" aria-label="Edit">
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => {
                    //deleting the user on API
                    axios.delete(
                      `https://6232374fc5ec1188ad2dacbe.mockapi.io/users/${e.id}`
                    );
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
