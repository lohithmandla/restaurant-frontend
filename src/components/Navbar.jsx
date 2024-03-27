// Navbar.js
import React, { useRef ,useState ,useEffect} from "react";
import Logo from "../assets/images/logo.png"; 
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems, removeFromCart} = useCart();
  const navbarRef = useRef();
  const cartRef = useRef();
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
  };

  const cartbarHandler = () => {
    cartRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const productCounts = cartItems.reduce((counts, item) => {
    counts[item.productId] = (counts[item.productId] || 0) + 1;
    return counts;
  }, {});

  // Filter out duplicates based on productId
  const uniqueCartItems = cartItems.filter(
    (item, index, self) =>
      index === self.findIndex((i) => i.productId === item.productId)
  );
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#review">reviews</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </nav>
        <div className="icons">
          <div
            className="fas fa-shopping-cart" 
            id="cart-btn"
            onClick={cartbarHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler} 
          ></div>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {uniqueCartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <span
                className="fas fa-times"
                onClick={() => handleRemoveFromCart(item.productId)}
              ></span>
              <img src={item.image} alt="" />
              <div className="content">
                <h3>{item.productName}</h3>
                <div className="price">
                  {item.price}/-
                  <h4> quantity: {productCounts[item.productId]}</h4>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total:- Rs.{total}</h2>
          </div>
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
