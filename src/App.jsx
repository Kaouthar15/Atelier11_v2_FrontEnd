import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import ListUser from "./components/ListUser";
export default function App2() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setUsers(res.data);
    };
    getUser();
  }, []);
  return (
    <div className="App">
      {users.length === 0 ? "Pas d'utilisateur" : <ListUser user={users} />}
    </div>
  );
}
