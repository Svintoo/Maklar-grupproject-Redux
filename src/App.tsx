import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./components/Context/AuthContext";

import FastighetsCard from "./components/FastighetsCards/FastighetsCard";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchFilter from "./components/SearchFilter/SearchFilter";

import UserView from "./components/UserView/UserView";

// import SigninPage from "./components/SigninPage/SigninPage";

function App() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { isLogged } = authContext;
  return (
    <>
      <Hero />
      <SearchFilter />

      <FastighetsCard />

      {!isLogged && <UserView />}

      <Footer />
    </>
  );
}

export default App;
