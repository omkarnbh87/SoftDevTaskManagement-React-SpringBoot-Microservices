/* eslint-disable react/prop-types */
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../ReduxToolkit/AuthSlice";

const Signup = ({ togglePanel }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    console.log("login form: ", formData);
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-4 ">Register</h1>
      <form className="space-y-0.5" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          type="text"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.role}
            label="Role"
            name="role"
            onChange={handleChange}
          >
            <MenuItem value={"CUSTOMER"}>CUSTOMER</MenuItem>
            <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
          </Select>
        </FormControl>
        <div>
          <button
            className="bg-green-600 w-full mt-2  py-2.5 rounded-full"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      <div>
        <span>Already have an account?</span>
        <button
          className="   px-4 py-2.5 underline text-yellow-400 "
          onClick={togglePanel}
        >
          Signin
        </button>
      </div>
    </div>
  );
};

export default Signup;
