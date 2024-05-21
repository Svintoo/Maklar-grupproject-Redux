import "./App.css";


import CardsWrapper from "./components/FastighetsCards/CardsWrapper";
import FastighetsCard from "./components/FastighetsCards/FastighetsCard";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import SigninPage from "./components/SigninPage/SigninPage";
// import CardDetails from "./components/CardDetails/CardDetails";

// import UploadImage from "./firebase/upload/UploadImage";
// import CardDetails from "./components/CardDetails/CardDetails";


function App() {
  return (
    <>
      <Hero />


	  {/* <SigninPage/> */}
      {/* <SearchFilter />
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

      <CardDetails />  */}


      <Footer />


    </>
  );
}

export default App;
