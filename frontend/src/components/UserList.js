function UserList({ users, deleteUser, editUser }) {

  return (
    <div>

      {
        users.map((user) => (

          <div key={user.id} className="user-card">

            <h3>{user.name}</h3>

            <p>{user.email}</p>

            <button onClick={() => editUser(user)}>
              Edit
            </button>

            <button onClick={() => deleteUser(user.id)}>
              Delete
            </button>

            <hr />

          </div>

        ))
      }

    </div>
  );
}

export default UserList;