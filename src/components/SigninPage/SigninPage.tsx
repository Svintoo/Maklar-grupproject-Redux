import { useState } from "react";
import "./SigninPage.css";
import { FaSignInAlt,FaSignOutAlt,FaPlusCircle  } from "react-icons/fa";
import logo from "../../assets/imgs/logo-mäklare.png";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import { createUser, signInUser, signOutUser } from "../../firebase/SignIn"

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signInUser(email, password);

    } catch (error: any) {
      console.error("Error signing in:", error.message);
    }
  };

  const handleCreateUser = async () => {
    try {
      await createUser(email, password);

    } catch (error: any) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <section>
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

      <BtnMedIcon title="Logga in" icon={<FaSignInAlt />} onClick={handleSignIn} />
	  <BtnMedIcon title="Skapa Konto" icon={<FaPlusCircle  />} onClick={handleCreateUser} />
	  <BtnMedIcon title="Logga ut" icon={<FaSignOutAlt  />} onClick={signOutUser} />

    </section>
  );
};

export default SigninPage;