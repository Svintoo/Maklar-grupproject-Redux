import "./App.css";
import { AuthProvider } from "./components/Context/AuthContext";

import CardsWrapper from "./components/FastighetsCards/CardsWrapper";
import FastighetsCard from "./components/FastighetsCards/FastighetsCard";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchFilter from "./components/SearchFilter/SearchFilter";

function App() {
  return (
    <>
      <AuthProvider>
        <Hero />

        <SearchFilter />
        <CardsWrapper>
          <FastighetsCard />
        </CardsWrapper>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
