import About from "./components/About";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Showcase from "./components/Showcase";

function App() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Benefits />
      <Showcase />
      <Footer />
    </main>
  );
}

export default App;
