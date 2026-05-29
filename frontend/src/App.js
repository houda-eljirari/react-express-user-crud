import { useEffect, useState } from "react";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {

  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [editingId, setEditingId] = useState(null);

  // FETCH USERS
  const fetchUsers = async () => {

    const response = await fetch("http://localhost:5000/users");

    const data = await response.json();

    setUsers(data);
  };

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

  // DELETE USER
  const deleteUser = async (id) => {

    await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE"
    });

    fetchUsers();
  };

  // EDIT USER
  const editUser = (user) => {

    setEditingId(user.id);

    setName(user.name);

    setEmail(user.email);
  };

  // UPDATE USER
  const updateUser = async () => {

    await fetch(`http://localhost:5000/users/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      })
    });

    setEditingId(null);

    setName("");

    setEmail("");

    fetchUsers();
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
        updateUser={updateUser}
        editingId={editingId}
      />

      <hr />

      <UserList
        users={users}
        deleteUser={deleteUser}
        editUser={editUser}
      />

    </div>
  );
}

export default App;