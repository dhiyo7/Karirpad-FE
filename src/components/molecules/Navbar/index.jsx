import React from "react";
import { Button, Image } from "components";
import logo from "../../../assets/logo-ciayoo.png";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Image alias="main" linkPath={logo} />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <p className="mr-16 hover:text-gray-900">Pencari Kerja</p>
          <p className="mr-5 text-red-600 hover:text-red-700">Daftar</p>
          <p className="mr-5 hover:text-gray-900">|</p>
          <p className="mr-5 hover:text-gray-900">Masuk</p>
        </nav>
        <Button
          variant={"primary"}
          textStyle={"white"}
          ownStyle={"py-2 px-5 ml-4"}
          rounded={"rounded-full"}
        >
          Perusahaan
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
