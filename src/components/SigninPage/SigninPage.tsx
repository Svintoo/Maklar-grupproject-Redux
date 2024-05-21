import "./SigninPage.css"
import { FaSignInAlt } from "react-icons/fa";
import logo from "../../assets/imgs/logo-mäklare.png"
import BtnMedIcon from "../Buttons/BtnMedIkon";






function SigninPage () {

	return (
		<section>
			<img className="logo" src={ logo } alt="Bostadsfynd-logo" />

			{/* form for sign in details */}

			<input className="input-field email" type="text" placeholder="E-post address" />
			<input className="input-field password"  type="password" placeholder="Lösenord" />

			{/* remember me checkbox?
			<article className="rememberMe">

				<label htmlFor="rememberMe">Kom ihåg mig</label>
				<input className="checkbox"  type="checkbox" id="rememberMe" />

			</article> */}

			{/* button for log in */}

			<BtnMedIcon title="Logga in" icon={<FaSignInAlt/>} />


		</section>
	)
}

export default SigninPage