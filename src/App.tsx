import "./App.css";
// import UploadImage from "./firebase/upload/UploadImage";
// import CardDetails from "./components/CardDetails/CardDetails";

import CardsWrapper from "./components/FastighetsCards/CardsWrapper";
import FastighetsCard from "./components/FastighetsCards/FastighetsCard";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      {/* <UploadImage /> */}

      <Hero />
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
