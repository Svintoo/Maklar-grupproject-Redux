import "./App.css";

import AddObjectBtn from "./components/addObjectBtn/AddObjectBtn";
import CardDetails from "./components/CardDetails/CardDetails";

import CardsWrapper from "./components/FastighetsCards/CardsWrapper";
import FastighetsCard from "./components/FastighetsCards/FastighetsCard";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
// import CardDetails from "./components/CardDetails/CardDetails";

// import UploadImage from "./firebase/upload/UploadImage";
// import CardDetails from "./components/CardDetails/CardDetails";

function App() {
  return (
    <>
      <AddObjectBtn />
      <Header />
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
      <CardDetails />
      =======
      <Footer />
    </>
  );
}

export default App;
