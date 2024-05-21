import "./App.css";

import CardsWrapper from "./components/FastighetsCards/CardsWrapper";
import FastighetsCard from "./components/FastighetsCards/FastighetsCard";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchFilter from "./components/SearchFilter/SearchFilter";

// import SigninPage from "./components/SigninPage/SigninPage";

function App() {
  return (
    <>
      <Hero />
      {/* <SigninPage /> */}
      <SearchFilter />
      <CardsWrapper>
        <FastighetsCard />
        <FastighetsCard />
        <FastighetsCard />
        <FastighetsCard />
        <FastighetsCard />
        <FastighetsCard />
        <FastighetsCard />
        <FastighetsCard />
        <FastighetsCard />
        <FastighetsCard />
      </CardsWrapper>

      <Footer />
    </>
  );
}

export default App;
