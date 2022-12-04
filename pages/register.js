import React, { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [userid, setuserid] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "userid") {
      setuserid(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "mobile") {
      setmobile(e.target.value);
    } else if (e.target.name == "password") {
      setpassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userid, name, email, mobile, password);
    const data = { userid, name, email, mobile, password };

    fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for registering");
        setuserid("");
        setname("");
        setemail("");
        setmobile("");
        setpassword("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="w-50 m-auto mt-5 mb-5 p-3 border border-info rounded"
      >
        <div className="mb-3 mt-3">
          <label htmlFor="userid">UserID:</label>
          <input
            type="text"
            className="form-control"
            id="userid"
            placeholder="Enter UserID"
            name="userid"
            value={userid}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="mobile"
            className="form-control"
            id="mobile"
            placeholder="Enter mobile"
            name="mobile"
            value={mobile}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary ps-5 pe-5">
          Sign Up
        </button>

        <p className="pt-5">
          Already have an Account?&nbsp;
          <strong className="text-primary">
            <Link href="/login">Sign In&nbsp;</Link>
          </strong>
        </p>
      </form>
    </div>
  );
};

export default Register;
