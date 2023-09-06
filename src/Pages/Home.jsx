import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

function Home({ products }) {
  return (
    <>
      <Navbar />
      <Banner />
      <Products products={products} />
      <Footer />
    </>
  );
}

export default Home;
