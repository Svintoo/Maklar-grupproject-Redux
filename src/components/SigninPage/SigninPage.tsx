import { useState, useContext } from "react";
import "./SigninPage.css";
import { FaSignInAlt, FaSignOutAlt, FaPlusCircle } from "react-icons/fa";
import logo from "../../assets/imgs/logo-mäklare.png";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import { createUser, signOutUser } from "../../firebase/SignIn";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../../main";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
interface SigninProps {
  handleCloseForm: () => void;
}

const SigninPage = ({ handleCloseForm }: SigninProps) => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { isLogged, setIsLogged } = authContext;
  // useEffect(() => {
  //   if (isLogged) {
  //     handleCloseForm();
  //   }
  // }, [isLogged, handleCloseForm]);

  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        setError("Vänligen fyll i alla obligatoriska fält !");
        return;
      } else {
        setError(null);
      }
      setEmail("");
      setPassword("");
      // await signInUser(email, password);
      await signInWithEmailAndPassword(auth, email, password);

      setIsLogged(true);
      handleCloseForm();
    } catch (error) {
      setError("ُE-mail eller lösenord är felaktigt");
    }
  };

  const handleCreateUser = async () => {
    try {
      await createUser(email, password);
    } catch (error) {
      setError("Fel vid skapande av konto");
    }
  };

  const handleSignOut = async () => {
    await signOutUser();
    setIsLogged(false);
    handleCloseForm();
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
