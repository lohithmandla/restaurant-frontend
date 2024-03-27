import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/css/style.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Review from './components/Review.jsx'
import Contact from './components/Contact.jsx'
import Blog from './components/Blog.jsx'
import Footer from './components/Footer.jsx'
import { CartProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <Navbar />
    <Home/>
    <About/>
    <Menu />
    <Review />
    <Contact />
    <Blog />
    <Footer />
    </CartProvider>
  </React.StrictMode>,
)
