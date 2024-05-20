import "./SearchFilter.css";
import { useState } from "react";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import { FaFilter } from "react-icons/fa";
import AddObject from "../AddObject/AddObject";
import Overlay from "../Overlay/Overlay";
import { IoAddCircleOutline } from "react-icons/io5";

function SearchFilter() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className=" search-filter-wrapper">
        <div className="search-input">
          <input type="search" placeholder="Sök" />
        </div>
        <div className="Filter">
          <BtnMedIcon title="Filter" icon={<FaFilter />} />
        </div>
      </div>

      <div className="add-object-btn">
        <BtnMedIcon
          title="Lägg till objekt"
          onClick={handleOpenModal}
          icon={<IoAddCircleOutline />}
        />
      </div>
      {isModalVisible && (
        <Overlay handleCloseForm={handleCloseModal}>
          <AddObject />
        </Overlay>
      )}
    </>
  );
}

export default SearchFilter;
