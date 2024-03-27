import React from "react";
import Blog1 from "../assets/images/blog-1.jpeg";
import Blog2 from "../assets/images/blog-2.jpeg";
import Blog3 from "../assets/images/blog-3.jpeg";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
            <div class="box">
              <div class="image">
                <img src={Blog1} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  tasty and refreshing spices
                </a>
                <span>by admin / 21st may, 2021</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dicta.
                </p>
                <a href="#" class="btn">
                  read more
                </a>
              </div>
            </div>
            <div class="box">
              <div class="image">
                <img src={Blog2} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  tasty and refreshing spices
                </a>
                <span>by admin / 21st may, 2021</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dicta.
                </p>
                <a href="#" class="btn">
                  read more
                </a>
              </div>
            </div>
            <div class="box">
              <div class="image">
                <img src={Blog3} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  tasty and refreshing spices
                </a>
                <span>by admin / 21st may, 2021</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dicta.
                </p>
                <a href="#" class="btn">
                  read more
                </a>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Blog;