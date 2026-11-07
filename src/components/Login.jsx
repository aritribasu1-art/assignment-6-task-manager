import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState(
    localStorage.getItem("rememberedUser") || ""
  );
  const [password, setPassword] = useState("");
  const [rememberUser, setRememberUser] = useState(
    !!localStorage.getItem("rememberedUser")
  );
  const [error, setError] = useState("");

  const getPasswordStrength = () => {
    if (!password) {
      return "";
    }

    if (password.length < 6) {
      return "Weak";
    }

    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    ) {
      return "Strong";
    }

    return "Medium";
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Username is required.");
      return;
    }

    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    const fakeToken = "jwt-simulation-token-12345";

    localStorage.setItem("jwtToken", fakeToken);

    if (rememberUser) {
      localStorage.setItem("rememberedUser", username);
    } else {
      localStorage.removeItem("rememberedUser");
    }

    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Task Manager Login</h1>

        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleLogin}>
          <label>Username</label>

          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            placeholder="Enter username"
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            placeholder="Enter password"
          />

          {password && (
            <p
              className={`password-strength ${getPasswordStrength().toLowerCase()}`}
            >
              Password Strength: {getPasswordStrength()}
            </p>
          )}

          <label className="remember-label">
            <input
              type="checkbox"
              checked={rememberUser}
              onChange={(e) => setRememberUser(e.target.checked)}
            />
            Remember User
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;