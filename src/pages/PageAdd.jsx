import React, { useState } from "react";
import "./page.css"; 
import Main from "./MainPage";

const Pages = () => {
  
  return (
    <div className="form-container" style={{display: "flex", justifyContent:"center"}}>
      <form className="form" >
        <h2>User Information</h2>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            
            placeholder="Enter first name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
           
            placeholder="Enter last name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            
            required
          />
        </div>
        <div className="form-group">
          <label>Sex</label>
          <select
            name="sex"
            
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button  className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Pages;
