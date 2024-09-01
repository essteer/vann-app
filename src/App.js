import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./App.css";
import Main from "./components/Main.jsx";
import Shop from "./components/Shop.jsx";
import Banner from "./components/boilerplate/Banner.jsx";
import BaseLogo from "./components/boilerplate/BaseLogo.jsx";
import Footer from "./components/boilerplate/Footer.jsx";
import Navbar from "./components/boilerplate/Navbar.jsx";
import NotFound from "./components/boilerplate/NotFound.jsx";
import Cart from "./components/carts/Cart.jsx";
import Product from "./components/products/Product.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import DeliveryReturn from "./components/pages/DeliveryReturn.jsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.jsx";
import ProductCare from "./components/pages/ProductCare.jsx";
import ProductSpecifications from "./components/pages/ProductSpecifications.jsx";
import RingSizeChart from "./components/pages/RingSizeChart.jsx";
import axios from "axios";

export const baseURL = "http://localhost:9001/api/v1"
export const CartContext = createContext();

function App() {
  
  const [cart, setCart] = useState([]);
  const demoUserId = "0df10449-d393-4c21-a78a-165c12d8ce09";
  const demoUserCartId = "35c6e5f4-b876-4539-be24-c45705ce47dd";

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/carts/${demoUserCartId}`
        );
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setCart({
          cartItems: {},
          cartCustomerId: demoUserId,
          cartId: demoUserCartId,
        });
      }
    };
    fetchCart();
  }, [demoUserCartId]);


  const updateCart = async (cartId, cartItems) => {
    try {
      const response = await axios.put(
        `${baseURL}/carts/${cartId}`,
        cartItems,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Cart update OK: ", response.data);
    } catch (error) {
      console.error(
        "Cart update error: ",
        error.response ? error.response.data : error.message
      );
    }
  };


  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Marquee autoFill="true" speed={85}>
                  <Banner />
                </Marquee>
                <Main />
              </div>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route
            path="/pages/delivery-and-return"
            element={<DeliveryReturn />}
          />
          <Route path="/pages/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/pages/product-care" element={<ProductCare />} />
          <Route
            path="/pages/product-specifications"
            element={<ProductSpecifications />}
          />
          <Route path="/pages/ring-size-chart" element={<RingSizeChart />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
        <BaseLogo />
      </div>
    </CartContext.Provider>
  );
}

export default App;
