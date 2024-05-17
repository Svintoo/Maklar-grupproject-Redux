import "./App.css";
import CardDetails from "./components/CardDetails/CardDetails";

import CardsWrapper from "./components/FastighetsCards/CardsWrapper";
import FastighetsCard from "./components/FastighetsCards/FastighetsCard";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
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
	  
      <Footer />


    </>
  );
}

export default App;
