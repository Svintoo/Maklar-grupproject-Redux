import "./SearchFilter.css";
import { useState } from "react";
import BtnMedIcon from "../Buttons/BtnMedIkon";
// import { FaFilter } from "react-icons/fa";
import AddObject from "../AddObject/AddObject";
import Overlay from "../Overlay/Overlay";
import { IoAddCircleOutline } from "react-icons/io5";

import FilterView from "../Filter/filter";
import { CiFilter } from "react-icons/ci";

function SearchFilter() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  //-----------------------------------filter
  const [isfilterVisible, setIsfilterVisible] = useState(false);
  //-----------------------------------filter

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  //-----------------------------------filter
  const handleOpenModal2 = () => {
    setIsfilterVisible(true);
  };

  const handleCloseModal2 = () => {
    setIsfilterVisible(false);
  };
  //-----------------------------------filter

  return (
    <>
      <div className=" search-filter-wrapper">
        <div className="search-input">
          <input type="search" placeholder="Sök" />
        </div>

        {/* //-----------------------------------filter */}
        <div className="Filter">
          <BtnMedIcon
            title="Filter"
            onClick={handleOpenModal2}
            icon={<CiFilter />}
          />
        </div>
        {isfilterVisible && (
          <Overlay handleCloseForm={handleCloseModal2}>
            <FilterView />
          </Overlay>
        )}
      </div>
      {/* //-----------------------------------filter */}

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
