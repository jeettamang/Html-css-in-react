import { useState } from "react";
import "../css/register.css";

const Register = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
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
        <h2>Registration Form</h2>
        <div>
          <label htmlFor="fullName">
            FullName
            <input
              type="text"
              name="name"
              placeholder="Enter fullName"
              onChange={handleChange}
            />
          </label>
        </div>
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
              placeholder="*************"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Phone
            <input
              type="tel"
              name="phone"
              placeholder="**************"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
