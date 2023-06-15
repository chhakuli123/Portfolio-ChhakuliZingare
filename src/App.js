import "./App.css";
import { About } from "./components/about/About";
import { Blogs } from "./components/blogs/Blogs";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Hero />
        <About />
        <Projects />
        <Blogs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
