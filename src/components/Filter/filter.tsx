import { useState } from "react";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import { MdOutlineAddTask } from "react-icons/md";

import "./filter.css";

interface FilterViewProps {
  setFilterOptions: React.Dispatch<
    React.SetStateAction<{
      rooms: number;
      price: number;
      area: number;
      location: string;
    }>
  >;
  handleCloseForm: () => void;
}

const formatNumber = (num: number) => {
  return num.toLocaleString("sv-SE").replace(/,/g, " ");
};

function FilterView({ setFilterOptions, handleCloseForm }: FilterViewProps) {
  const [rooms, setRooms] = useState(1);
  const [price, setPrice] = useState(7000);
  const [area, setArea] = useState(20);
  const [location, setLocation] = useState("");

  const handleSave = () => {
    setFilterOptions({ rooms, price, area, location });
    handleCloseForm();
  };

  return (
    <section className="filterview ">
      <div className="card ">
        <div className="filter-input-wrapper">
          <label htmlFor="rooms">Antal rum: {rooms}</label>
          <input
            type="range"
            step={0.5}
            min={1}
            max={12}
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
          />
        </div>
        <div className="filter-input-wrapper">
          <label htmlFor="price">Maxpris: {formatNumber(price)} kr</label>
          <input
            type="range"
            step={1000}
            min={7000}
            max={20000000}
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="filter-input-wrapper">
          <label htmlFor="area">Minsta area: {area} (m²)</label>
          <input
            type="range"
            step={5}
            min={20}
            max={200}
            id="area"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
          />
        </div>
        <div className="filter-input-wrapper">
          <label htmlFor="location">Plats:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <BtnMedIcon
            type="submit"
            title="Spara"
            onClick={handleSave}
            icon={<MdOutlineAddTask style={{ color: "green" }} />}
          />
        </div>
      </div>
    </section>
  );
}

export default FilterView;
