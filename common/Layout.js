import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  const { children, footerstatus } = props;
  return (
    <>
      <Header />
      <Navbar />
      {children}
      {!footerstatus && <Footer />}
    </>
  );
};

export default Layout;
