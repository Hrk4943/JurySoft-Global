import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function CheckOutForm({ products }) {
  const { id } = useParams();
  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );
  const Navigate = useNavigate();
  
  return (
    <>
      <div className="max-w-screen-lg mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-600">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Pin Number
              </label>
              <input
                type="number"
                id="pin number"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </form>
        </div>
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-600">
                Card Holder Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-600">
                Card Number
              </label>
              <input
                type="number"
                id="cardNumber"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiration" className="block text-gray-600">
                Expiration Date
              </label>
              <input
                type="text"
                id="expiration"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </form>
        </div>
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <ul className="mb-4">
            <li className="flex justify-between">
              <span> {selectedProduct?.name}</span>
              <span>Price: ₹ {selectedProduct?.price}</span>
            </li>
          </ul>
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>₹ {selectedProduct?.price} </span>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => {
              Navigate("/payment");
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default CheckOutForm;
