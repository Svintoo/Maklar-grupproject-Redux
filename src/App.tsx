import "./App.css";

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
      <SearchFilter />

      <FastighetsCard />

      <UserView />

      <Footer />
    </>
  );
}

export default App;
