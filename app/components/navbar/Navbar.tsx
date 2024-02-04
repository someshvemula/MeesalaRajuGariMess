import React from "react";
import logo from "../../assets/logo.jpeg";
import Image, { StaticImageData } from "next/image";

const Navbar = () => {
  return (
    <header className="bg-black w-full p-2 border-b border-gray-500">
      <Image
        src={logo}
        alt="logo"
        className="object-contain w-10 h-10 rounded-md"
      />
    </header>
  );
};

export default Navbar;
