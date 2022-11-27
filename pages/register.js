import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="container">
      <form className="w-50 m-auto mt-5 mb-5 p-3 border border-info rounded">
        <div className="mb-3 mt-3">
          <label for="name">Username:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Username"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label for="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label for="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <div className="mb-3">
          <label for="cpwd">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="cpwd"
            placeholder="Confirm password"
            name="pswd"
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
            />
            Remember me
          </label>
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
