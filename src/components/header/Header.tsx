import { useState } from "react";
import { VscAccount, VscArrowCircleDown } from "react-icons/vsc";
import "./Header.css";

import SigninPage from "../SigninPage/SigninPage";
import Overlay from "../Overlay/Overlay";

const Header: React.FC = () => {

const [isModalVisible, setIsModalVisible] = useState(false);

const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };


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

          </div>
        </div>
      </header>

	  {isModalVisible && (
		<Overlay handleCloseForm={handleCloseModal}>
          <SigninPage />
        </Overlay>

	  )}

    </>
  );
};

export default Header;