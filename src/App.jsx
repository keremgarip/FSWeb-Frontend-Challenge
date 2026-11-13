
import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ApiDemo from "./components/ApiDemo";
import EnglishProficiency from "./components/EnglishProficiency";

function App() {
  const params = new URLSearchParams(window.location.search);

  const showApiDemo = params.get("api-demo") === "1";

  if (showApiDemo) {
    return <ApiDemo/>;
  }

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Skills />
        <Profile />
        <EnglishProficiency />
        <Projects />
      </main>

      <Footer />
    </>
  );
}

export default App;


