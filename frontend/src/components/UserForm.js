function UserForm({ name, email, setName, setEmail, addUser }) {

  return (
    <div>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={addUser}>
        Add User
      </button>

    </div>
  );
}

export default UserForm;