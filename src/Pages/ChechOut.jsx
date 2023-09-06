import React from "react";
import Navbar from "../Components/Navbar";
import CheckOutForm from "../Components/CheckOutForm";
import Footer from "../Components/Footer";

function CheckOut({ products, cartItems }) {
  return (
    <>
      <Navbar />
      <CheckOutForm products={products} cartItems={cartItems} />
      <Footer />
    </>
  );
}

export default CheckOut;
