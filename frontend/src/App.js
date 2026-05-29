import { useEffect, useState } from "react";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {

  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // FETCH USERS
  const fetchUsers = async () => {

    const response = await fetch("http://localhost:5000/users");

    const data = await response.json();

    setUsers(data);
  };

  // USE EFFECT
  useEffect(() => {
    fetchUsers();
  }, []);

  // ADD USER
  const addUser = async () => {

    const newUser = {
      name,
      email
    };

    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });

    fetchUsers();

    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>User Management App</h1>

      <UserForm
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        addUser={addUser}
      />

      <hr />

      <UserList users={users} />

    </div>
  );
}

export default App;