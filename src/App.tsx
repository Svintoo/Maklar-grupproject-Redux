import "./App.css";

import FastighetsCard from "./components/FastighetsCards/FastighetsCard";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchFilter from "./components/SearchFilter/SearchFilter";

function App() {
  return (
    <>
      <Hero />
      <SearchFilter />
      <FastighetsCard />
      <Footer />
    </>
  );
}

export default App;
