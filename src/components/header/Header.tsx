import { useState } from "react";
import { VscAccount, VscArrowCircleDown } from "react-icons/vsc";
import "./Header.css";
// import DropdownMenu from "../DropdownMenu/Dropdown";
import SigninPage from "../SigninPage/SigninPage";
import { signOutUser } from "../../firebase/SignIn";
import Overlay from "../Overlay/Overlay";

const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(false);

const [isModalVisible, setIsModalVisible] = useState(false);

const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleSignOut = async () => {
//     try {
//       await signOutUser();
//       setIsLoggedIn(false);
//     } catch (error: any) {
//       console.error("Error signing out:", error.message);
//     }
//   };

//   const handleSignIn = () => {
//     setShowSignIn(true);
//   };

//   const closeSignIn = () => {
//     setShowSignIn(false);
//   };

  return (
    <>
      <header className="header_container">
        <div className="items_container">
          <div className="logo_containter">
            <h1 className="logo">Bostadsfynd</h1>
          </div>
          <div className="login_group">
            <div className="admin_icon" onClick={handleOpenModal}>
              <VscAccount />
            </div>
            <div className="admin_name_group" onClick={handleOpenModal}>
              <p>Admin</p>
              <VscArrowCircleDown className="admin_arrow" />
            </div>
            {/* <DropdownMenu
              isOpen={isMenuOpen}
              isLoggedIn={isLoggedIn}
              onSignOut={handleSignOut}
            //   onSignIn={handleSignIn}
            /> */}
          </div>
        </div>
      </header>

	  {isModalVisible && (
		<Overlay handleCloseForm={handleCloseModal}>
          <SigninPage />
        </Overlay>

	  )}
      {/* {showSignIn && <SigninPage onClose={closeSignIn} />} */}
    </>
  );
};

export default Header;