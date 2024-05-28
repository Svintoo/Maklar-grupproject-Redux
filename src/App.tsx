import "./App.css";
import { AuthProvider } from "./components/Context/AuthContext";
import { useState } from "react"; //  här
import CardsWrapper from "./components/FastighetsCards/CardsWrapper";
import FastighetsCard from "./components/FastighetsCards/FastighetsCard";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchFilter from "./components/SearchFilter/SearchFilter";

// import SigninPage from "./components/SigninPage/SigninPage";

function App() {
  const [rangeValue, setRangeValue] = useState<number>(1); //  här
  return (
    <>

      <AuthProvider>
        <Hero />
        {/* <SigninPage /> */}
        <SearchFilter setRangeValue={setRangeValue} /> {/* Skicka setRangeValue som prop */}
        <CardsWrapper>
          {/* //props */}
          <FastighetsCard rangeValue={rangeValue} /> {/* Skicka rangeValue som prop */}
          {/* <FastighetsCard />
          <FastighetsCard />
          <FastighetsCard />
          <FastighetsCard />
          <FastighetsCard />
          <FastighetsCard />
          <FastighetsCard />
          <FastighetsCard />
          <FastighetsCard /> */}
        </CardsWrapper>
        <Footer />
      </AuthProvider>

    </>
  );
}

export default App;
