import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddUser } from "./Components/Adduser";
import { Edit } from "./Components/Edit";
import { Navbar } from "./Components/Navbar";
import { Users } from "./Components/Users";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edit/:u" element={<Edit />} />
      </Routes>
    </div>
  );
}
