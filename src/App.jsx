import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
    <Header />

    <main>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
    </main>

    <Footer />
    </>
  )
}

export default App;

