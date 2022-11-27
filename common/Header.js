import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Image src="/logo.jpg" alt="logo" width={100} height={75} />
        </div>
        <div className="col-md-6 text-end">
          <button
            type="button"
            className="btn btn-outline-info m-3 ps-5 pe-5 fw-bold"
          >
            <Link href="/login">LOGIN</Link>
          </button>
          <button
            type="button"
            className="btn btn-outline-info m-3 ps-5 pe-5 fw-bold"
          >
            <Link href="/register">REGISTER</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
