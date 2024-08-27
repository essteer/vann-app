import "./App.css";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Marquee from "react-fast-marquee";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Marquee autoFill="true" speed={85} >
        <Banner />
      </Marquee>

      <Footer />
    </div>
  );
}

export default App;
