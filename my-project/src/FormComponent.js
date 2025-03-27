import React, { useState } from "react";
import axios from "axios";
import "./FormComponent.css"; // Add styling for form

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post("http://localhost:8080/api/form", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "" }); // Clear form
    } catch (error) {
      alert("Failed to submit form");
    }
  };

  return (
    <div className="form-container">
      <h2>Register for IIT Spoken Tutorial</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
