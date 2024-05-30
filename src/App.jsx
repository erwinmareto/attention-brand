import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Showcase from "./components/Showcase";
import Detail from "./components/Detail";
import Blogs from "./components/Blogs";

function App() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
              <About />
              <Benefits />
              <Blogs />
              <Showcase />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path={"/products/:id"} element={<Detail />} />
      </Routes>
    </main>
  );
}

export default App;
