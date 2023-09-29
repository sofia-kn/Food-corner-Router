import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
