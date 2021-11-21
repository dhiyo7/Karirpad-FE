import React from "react";
import { Navbar, Banner, Loker, TypeLoker, Kriteria, Faq, Footer } from "../../components/molecules";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Loker/>
      <TypeLoker/>
      <Kriteria/>
      <Faq/>
      <Footer/>
    </>
  );
};

export default Home;
