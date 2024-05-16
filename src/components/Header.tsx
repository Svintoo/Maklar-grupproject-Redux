//import headerBackground from "../assets/img/header-background.png";
import "../App.css";

const Header = () => {
  return (
    <header className="header_container">
      <div className="items_container">
        <div className="logo_containter">
          <h1 className="logo">Bostadsfynd</h1>
        </div>
        <div className="login_icon">
          <h2>login icon</h2>
          <p>login text</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
