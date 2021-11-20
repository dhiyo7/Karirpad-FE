import React from "react";
import { Navbar, Banner, Loker, TypeLoker, Kriteria } from "../../components/molecules";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Loker/>
      <TypeLoker/>
      <Kriteria/>
    </>
  );
};

export default Home;
