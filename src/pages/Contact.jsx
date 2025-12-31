import { useState } from "react";
import "../css/contact.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
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
    <div className="contact-form">
      <div className="left">
        <form onSubmit={handleSubmit} className="contact">
          <h2>Contact Us</h2>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name="textarea"
              id="texarea"
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="send-btn">
            Send message
          </button>
        </form>
      </div>
      <div className="right">
        <img src="/public/businessman.png" />
      </div>
    </div>
  );
};

export default Contact;
