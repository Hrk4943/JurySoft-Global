import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Helpers/CartContext";

function CartComponent() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const Navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleMakePayment = (item) => {
    setSelectedProduct(item);
    Navigate(`/checkout/${item.id}`);
  };
  return (
    <>
      <div className="container mx-auto mt-10 mb-10 sm:mb-36 rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Shopping Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="mt-10 mb-10 text-center">Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row justify-between border-4 items-center sm:mx-60 px-2 sm:px-10 py-2 sm:py-10 mb-5"
              >
                <div className="flex items-center mb-2 sm:mb-0">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-2 sm:mr-4"
                  />
                  <div>
                    <span className="text-lg">{item.name}</span>
                    <div className="flex items-center mt-1">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="text-gray-500 hover:text-gray-700 text-lg mr-2"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="text-gray-500 hover:text-gray-700 text-lg ml-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <span className="text-lg">
                  Price: ₹ {(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 text-lg mt-2 sm:mt-0"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <p className="text-lg font-semibold text-center">
            Total Price: ₹ {totalPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-center">
          {cartItems.length !== 0 ? (
            <button
              onClick={() => {
                handleMakePayment(cartItems[0]);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 "
            >
              Make Payment
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default CartComponent;
