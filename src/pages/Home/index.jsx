import React from "react";
import { Navbar, Banner, Loker, TypeLoker, Kriteria, Faq } from "../../components/molecules";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Loker/>
      <TypeLoker/>
      <Kriteria/>
      <Faq/>
    </>
  );
};

export default Home;
