import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormExample = () => {
  const [userName, setUserName] = useState("");
  const [newUserDetails, setNewUserDetails] = useState("");
  const notify = () => toast("Data uploaded successfully!");
  const getUserName = (e) => {
    setUserName(e.target.value);
  };

  const userDetails = (e) => {
    e.preventDefault();
    setNewUserDetails(userName);
    notify()
  };
  return (
    <section className="form-section">
      <div className="form-input">
        <h2>Hello {newUserDetails}</h2>
        <ToastContainer/>
        <form onSubmit={userDetails}>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={getUserName}
          />
          <br />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormExample;
