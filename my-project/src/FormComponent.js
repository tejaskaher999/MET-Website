import React, { useState } from "react";
// import axios from "axios";
import "./FormComponent.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const validateForm = () => {
    let newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    
    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = "Phone must be 10 digits";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    
    if (!validateForm()) return;

    try {
      // For now, just simulate a successful API call
      // await axios.post("http://localhost:8080/api/form", formData);
      setTimeout(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "" }); // Clear form
      }, 1000);
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="form-container">
      <h2>Register for IIT Spoken Tutorial</h2>
      
      {submitStatus === "success" && (
        <div className="success-message">Form submitted successfully!</div>
      )}
      
      {submitStatus === "error" && (
        <div className="error-message">Failed to submit form. Please try again.</div>
      )}
      
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Phone:</label>
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          className={errors.phone ? "input-error" : ""}
          placeholder="10-digit number"
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <button type="submit" className="submit-button">Register Now</button>
      </form>
    </div>
  );
};

export default FormComponent;
