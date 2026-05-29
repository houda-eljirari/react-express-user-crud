function UserForm({
  name,
  email,
  setName,
  setEmail,
  addUser,
  updateUser,
  editingId
}) {

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

      {
        editingId ? (
          <button onClick={updateUser}>
            Update User
          </button>
        ) : (
          <button onClick={addUser}>
            Add User
          </button>
        )
      }

    </div>
  );
}

export default UserForm;