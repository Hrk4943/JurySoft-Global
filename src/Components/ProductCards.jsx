import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Helpers/CartContext";
import Swal from "sweetalert2"

function ProductCard({ products }) {
  const { addToCart } = useCart();
  const Navigate = useNavigate();

  const showAlert = () => {
    Swal.fire({
      title: "Item added to cart",
      icon: "success",
      showConfirmButton: false,
      timer: 1500, 
    });
  };
  const handleAddToCart = (product) => {
    addToCart(product);
    showAlert(); 
  }
  return (
    <>
      <div className="p-4 flex justify-center">
        <div className="mb-7 rounded-lg cursor-pointer overflow-hidden">
          <img
            src={products.image[0]}
            className="w-72 h-60 rounded-lg "
            alt={products.name}
            onClick={() => Navigate(`/productDetails/${products.id}`)}
          />
          <div className="p-4">
            <p className="text-lg flex justify-center font-semibold mb-2">
              {products.name}
            </p>
            <p className="text-xl flex justify-center font-semibold">
            ₹ {products.price}
            </p>
          </div>
          <div className="p-4 text-center">
            <button
              className=" text-black border-2 px-4 py-2 rounded-lg hover:bg-black hover:text-white"
              onClick={() =>  handleAddToCart(products)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
