import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Beach from "./Components/Beach";
import SliderOne from "./Components/SliderOne";
import ExpBanner from "./Components/ExpBanner";
import SliderTwo from "./Components/SliderTwo";
import SportBanner from "./Components/SportBanner";
import SliderThree from "./Components/SliderThree";
import Location from "./Components/Location";
import Cana from "./Components/Cana";
import Orlando from "./Components/Orlando";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Beach />
      <SliderOne />
      <ExpBanner />
      <SliderTwo />
      <SportBanner />
      <SliderThree />
      <Location />
      <Cana />
      <Orlando />
      <Footer />
    </div>
  );
}

export default App;
