import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { useTheme } from "./context/ThemeContext";

import enData from "./data/en.json";
import trData from "./data/tr.json";

console.log("English Data:", enData);
console.log("Turkish Data:", trData);

function App() {
  const {theme} = useTheme();
  console.log("Current theme:", theme);


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

