import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setUser } = useContext(UserContext) || {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (setUser) setUser({ username, password });
  };

  return (
    <div>
      <h1>Login form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
