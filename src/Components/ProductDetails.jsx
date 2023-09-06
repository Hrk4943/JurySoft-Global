import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";


function ProductDetails({ products }) {
  const { id } = useParams();
  const Navigate = useNavigate();
  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 py-24">
        <div className="mb-10 md:mb-0 flex justify-center">
          <ImageSlider
            images={selectedProduct.image}
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h1 className="text-3xl flex justify-center items-center sm:text-4xl font-medium text-gray-900 mb-4">
            <span className="font-bold">{selectedProduct.name}</span>
          </h1>
          <span className="flex justify-center items-center text-gray-600 p-1">
            {selectedProduct.description}
          </span>
          <h3 className="text-2xl font-semibold flex justify-center items-center p-2">
            ₹ {selectedProduct?.price}
          </h3>
          <div className="flex justify-center items-center mb-4">
            <button
              className="px-6 py-2 text-lg font-bold border-2 rounded-md text-black bg-white hover:text-white hover:bg-black border-none focus:outline-none"
              onClick={()=>{Navigate(`/checkout/${selectedProduct.id}`)}}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
