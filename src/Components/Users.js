import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://6232374fc5ec1188ad2dacbe.mockapi.io/users")
      .then((response) => setUsers(response.data));
  }, [users]);

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">User</h1>
      <table className="table table-dark table-hover">
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
          {/* maping the users profile */}
          {users.map((e, i) => (
            <tr key={i} className="text-center">
              <td>{e.id}</td>
              <td>{e.Firstname}</td>
              <td>{e.Lastname}</td>
              <td>{e.EmpID}</td>
              <td>{e.City}</td>
              <td>
                {/*create a link to buttons */}
                <Link to={`/edit/${e.id}`}>
                  <IconButton color="warning" aria-label="Edit">
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => {
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
      </table>
    </div>
  );
};
