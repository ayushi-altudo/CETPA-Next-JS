import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Image src="/logo.jpg" alt="logo" width={150} height={100} />
    </div>
  );
};

export default Header;
