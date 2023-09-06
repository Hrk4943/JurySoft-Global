import React from "react";
import Navbar from "../Components/Navbar";
import ProductDetails from "../Components/ProductDetails";
import Footer from "../Components/Footer";

function SinglePage({ products }) {
  return (
    <>
      <Navbar />
      <ProductDetails products={products} />
      <Footer />
    </>
  );
}

export default SinglePage;
