import { useState } from "react";
import "../css/register.css";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="form-div">
      <form onSubmit={handleSubmit} className="form">
        <h2>Login Your Account</h2>
        <div>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Eenter password"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
