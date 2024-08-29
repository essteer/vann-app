import "./App.css";
import Banner from "./components/Banner.jsx";
import Main from "./components/Main.jsx";
import Shop from "./components/Shop.jsx";
import BaseLogo from "./components/boilerplate/BaseLogo.jsx";
import Footer from "./components/boilerplate/Footer.jsx";
import Navbar from "./components/boilerplate/Navbar.jsx";
import NotFound from "./components/boilerplate/NotFound.jsx";
import Product from "./components/products/Product.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import DeliveryReturn from "./components/pages/DeliveryReturn.jsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.jsx";
import ProductCare from "./components/pages/ProductCare.jsx";
import ProductSpecifications from "./components/pages/ProductSpecifications.jsx";
import RingSizeChart from "./components/pages/RingSizeChart.jsx";
import Marquee from "react-fast-marquee";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
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
        <Route path="/pages/about" element={<About />}/>
        <Route path="/pages/contact" element={<Contact />}/>
        <Route path="/pages/delivery-and-return" element={<DeliveryReturn />}/>
        <Route path="/pages/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/pages/product-care" element={<ProductCare />}/>
        <Route path="/pages/product-specifications" element={<ProductSpecifications />}/>
        <Route path="/pages/ring-size-chart" element={<RingSizeChart />}/>
        <Route path="/products/:productId" element={<Product />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>

      <Footer />
      <BaseLogo />
    </div>
  );
}

export default App;
