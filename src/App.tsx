import "./App.css";

import CardsWrapper from "./components/FastighetsCards/CardsWrapper";
import FastighetsCard from "./components/FastighetsCards/FastighetsCard";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchFilter from "./components/SearchFilter/SearchFilter";

import UserView from "./components/UserView/UserView";

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
      <UserView />
      <Footer />
    </>
  );
}

export default App;
