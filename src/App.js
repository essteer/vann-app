import "./App.css";
import Banner from "./components/Banner.jsx";
import BaseLogo from "./components/BaseLogo.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Navbar from "./components/Navbar.jsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.jsx";
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
        <Route path="/pages/privacy-policy" element={<PrivacyPolicy />}/>
      </Routes>

      <Footer />
      <BaseLogo />
    </div>
  );
}

export default App;
