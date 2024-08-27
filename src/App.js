import "./App.css";
import Banner from "./components/Banner.jsx";
import BaseLogo from "./components/BaseLogo.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Navbar from "./components/Navbar.jsx";
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
        <Route path="/pages/Contact" element={<Contact />}/>
        <Route path="/pages/delivery-and-return" element={<DeliveryReturn />}/>
        <Route path="/pages/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/pages/product-care" element={<ProductCare />}/>
        <Route path="/pages/product-specifications" element={<ProductSpecifications />}/>
        <Route path="/pages/ring-size-chart" element={<RingSizeChart />}/>
      </Routes>

      <Footer />
      <BaseLogo />
    </div>
  );
}

export default App;
