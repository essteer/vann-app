import "./App.css";
import Banner from "./components/Banner.jsx";
import BaseLogo from "./components/BaseLogo.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx"
import Navbar from "./components/Navbar.jsx";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Marquee autoFill="true" speed={85}>
        <Banner />
      </Marquee>

      <Main />

      <Footer />
      <BaseLogo />
    </div>
  );
}

export default App;
