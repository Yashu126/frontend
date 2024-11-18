import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
