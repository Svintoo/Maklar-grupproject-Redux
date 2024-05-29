import "./SearchFilter.css";
import { useContext, useState } from "react";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import AddObject from "../AddObject/AddObject";
import Overlay from "../Overlay/Overlay";
import { IoAddCircleOutline } from "react-icons/io5";
import FilterView from "../Filter/filter";
import { CiFilter } from "react-icons/ci";
import { AuthContext } from "../Context/AuthContext";

interface FilterViewProps {
  setFilterOptions: React.Dispatch<
    React.SetStateAction<{
      rooms: number;
      price: number;
      area: number;
      location: string;
    }>
  >;
}

function SearchFilter({ setFilterOptions }: FilterViewProps) {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { isLogged } = authContext;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isfilterVisible, setIsfilterVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleOpenModal2 = () => {
    setIsfilterVisible(true);
  };

  const handleCloseModal2 = () => {
    setIsfilterVisible(false);
  };

  return (
    <>
      <div className="search-filter-wrapper">
        <div className="search-input">
          <input type="search" placeholder="Sök" />
        </div>

        <div className="Filter">
          <BtnMedIcon
            title="Filter"
            onClick={handleOpenModal2}
            icon={<CiFilter />}
          />
        </div>
        {isfilterVisible && (
          <Overlay handleCloseForm={handleCloseModal2}>
            <FilterView
              setFilterOptions={setFilterOptions}
              handleCloseForm={handleCloseModal2}
            />
          </Overlay>
        )}
      </div>
      {isLogged && (
        <div className="add-object-btn">
          <BtnMedIcon
            title="Lägg till objekt"
            onClick={handleOpenModal}
            icon={<IoAddCircleOutline />}
          />
        </div>
      )}

      {isModalVisible && (
        <Overlay handleCloseForm={handleCloseModal}>
          <div className="card card-details">
            <AddObject />
          </div>
        </Overlay>
      )}
    </>
  );
}

export default SearchFilter;
