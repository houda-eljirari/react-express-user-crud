import { useEffect, useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {

    fetch("http://localhost:5000")
      .then((response) => response.text())
      .then((data) => setMessage(data));

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management App</h1>

      <p>{message}</p>
    </div>
  );
}

export default App;