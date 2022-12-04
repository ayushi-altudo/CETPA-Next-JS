import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form className="w-50 m-auto mt-5 mb-5 p-3 border border-info rounded">
        <div className="mb-3 mt-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>

        <button type="submit" className="btn btn-primary ps-5 pe-5">
          Sign In
        </button>

        <p className="pt-5">
          Don't have an Account?&nbsp;
          <strong className="text-primary">
            <Link href="/register">Sign Up&nbsp;</Link>
          </strong>
          now.
        </p>
      </form>
    </div>
  );
};

export default Login;
