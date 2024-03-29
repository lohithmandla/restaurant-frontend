import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
const Menu = () => {
    const { addToCart } = useCart();
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        const getData=async ()=>{
            let result=await axios.get("http://16.170.211.165:8000/getall")
            const {data}=result;
            setProducts(data)
        }
        getData()
    },[])
    
  return (
    <>
    
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        { <div className="box-container">
          {products.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.image} alt="" />
              <h3>{item.productName}</h3>
              <div className="price">
                 {item.price} /-  <span>{item.price+10}</span>
              </div>
              <a  className="btn" onClick={()=>addToCart(item)}>
                add to cart
              </a>
            </div>
          ))}
        </div> }
      </section>
    </>
    
  );
};

export default Menu;