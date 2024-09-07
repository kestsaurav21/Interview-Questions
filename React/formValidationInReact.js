import { useState } from "react";
import "./styles.css";

export default function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");

  function validateEmail(email) {
    // Regular expression for validating email addresses
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleClick(e) {
    e.preventDefault();
    if (
      fname.length === 0 ||
      lname.length === 0 ||
      email.length === 0 ||
      num.length === 0
    ) {
      alert("Please fill all the details");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (num.length !== 10 || isNaN(num)) {
      alert("Please enter a valid 10-digit contact number");
      return;
    }

    alert("Form submitted successfully!");
  }

  return (
    <div className="App">
      <h1>FORM</h1>
      <form className="form">
        <label htmlFor="fname">First Name</label>
        <input
          onChange={(e) => {
            setFname(e.target.value);
          }}
          type="text"
          value={fname}
          className="fname"
        />
        <label htmlFor="fname">Last Name</label>
        <input
          onChange={(e) => {
            setLname(e.target.value);
          }}
          type="text"
          value={lname}
          className="lname"
        />
        <label htmlFor="fname">Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          value={email}
          className="email"
        />
        <label htmlFor="fname">Contact No.</label>
        <input
          onChange={(e) => {
            setNum(e.target.value);
          }}
          type="number"
          value={num}
          className="number"
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}
