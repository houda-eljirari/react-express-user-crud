const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [
  {
    id: 1,
    name: "Houda",
    email: "houda@gmail.com"
  }
];

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// GET USERS
app.get("/users", (req, res) => {
  res.json(users);
});

// ADD USER
app.post("/users", (req, res) => {

  const newUser = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email
  };

  users.push(newUser);

  res.json(newUser);
});

const PORT = 5000;

// UPDATE USER
app.put("/users/:id", (req, res) => {

  const id = parseInt(req.params.id);

  users = users.map((user) =>
    user.id === id
      ? {
          ...user,
          name: req.body.name,
          email: req.body.email
        }
      : user
  );

  res.json({ message: "User updated" });
});

// DELETE USER
app.delete("/users/:id", (req, res) => {

  const id = parseInt(req.params.id);

  users = users.filter((user) => user.id !== id);

  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});