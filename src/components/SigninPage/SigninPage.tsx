// SigninPage.tsx
import React, { useState, useContext } from "react";
import "./SigninPage.css";
import { FaSignInAlt, FaSignOutAlt, FaPlusCircle } from "react-icons/fa";
import logo from "../../assets/imgs/logo-mäklare.png";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import { createUser, signInUser, signOutUser } from "../../firebase/SignIn";
import { AuthContext } from "../Context/AuthContext";

const SigninPage: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { isLogged, setIsLogged } = authContext;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        setError("Vänligen fyll i alla obligatoriska fält !");
        return;
      } else {
        setError(null);
      }
      await signInUser(email, password);
      setIsLogged(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Fel vid inloggning");
    }
  };

  const handleCreateUser = async () => {
    try {
      await createUser(email, password);
    } catch (error) {
      console.error("Error creating user:", error);
      setError("Fel vid skapande av konto");
    }
  };

  const handleSignOut = async () => {
    await signOutUser();
    setIsLogged(false);
  };

  return (
    <section className="signin-page">
      <img className="logo" src={logo} alt="Bostadsfynd-logo" />

      <input
        className="input-field email"
        type="text"
        placeholder="E-post address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input-field password"
        type="password"
        placeholder="Lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <BtnMedIcon
        title="Skapa Konto"
        icon={<FaPlusCircle />}
        onClick={handleCreateUser}
      />
      {error && <p style={{ color: "red", padding: ".5rem" }}>{error}</p>}
      {isLogged ? (
        <BtnMedIcon
          title="Logga ut"
          icon={<FaSignOutAlt />}
          onClick={handleSignOut}
        />
      ) : (
        <BtnMedIcon
          title="Logga in"
          icon={<FaSignInAlt />}
          onClick={handleSignIn}
        />
      )}
    </section>
  );
};

export default SigninPage;
