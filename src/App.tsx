import { useContext, useState } from "react";
import "./App.css";

import { AuthContext } from "./components/Context/AuthContext";

import FastighetsCard from "./components/FastighetsCards/FastighetsCard";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import UserView from "./components/UserView/UserView";
import Reviews from "./components/Reviews/Reviews";

function App() {
  const [filterOptions, setFilterOptions] = useState({
    rooms: 0,
    price: 0,
    area: 0,
    location: "",
  });
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { isLogged } = authContext;

  return (
    <>
      <Hero />
      <SearchFilter setFilterOptions={setFilterOptions} />

      <FastighetsCard filterOptions={filterOptions} />

      {!isLogged && <UserView />}
      <div className="aligned">
      {isLogged &&<Reviews></Reviews>}
      </div>
      <Footer />
    </>
  );
}

export default App;
