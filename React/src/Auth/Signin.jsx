/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { useState } from "react";

const Signin = ({ togglePanel }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login form: ", formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8 ">Login</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <div>
          <button
            className="customButton w-full  py-2.5 rounded-full"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div>
        <button
          className="bg-green-600 mt-4  px-4 py-2.5 rounded-full w-full"
          onClick={togglePanel}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signin;
