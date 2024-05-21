import { VscAccount, VscArrowCircleDown } from "react-icons/vsc";
import "./Header.css";

const Header = () => {
  return (
    <header className="header_container  ">
      <div className="items_container">
        <div className="logo_containter">
          <h1 className="logo">Bostadsfynd</h1>
        </div>
        <div className="login_group">
          <VscAccount className="admin_icon" />
          <div className="admin_name_group">
            <p>Admin</p>
            <VscArrowCircleDown className="admin_arrow" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
