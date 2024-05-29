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

function FilterView({ setFilterOptions, handleCloseForm }: FilterViewProps) {
  const [rooms, setRooms] = useState(0);
  const [price, setPrice] = useState(0);
  const [area, setArea] = useState(0);
  const [location, setLocation] = useState("");

  const handleSave = () => {
    setFilterOptions({ rooms, price, area, location });
    handleCloseForm();
  };

  return (
    <section className="filterview">
      <div>
        <label htmlFor="rooms">Antal rum:</label>
        <input
          type="number"
          id="rooms"
          value={rooms}
          onChange={(e) => setRooms(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="price">Maxpris:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="area">Minsta area (m²):</label>
        <input
          type="number"
          id="area"
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="location">Plats:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="add-object-submit-btn">
        <BtnMedIcon
          type="submit"
          title="Spara"
          onClick={handleSave}
          icon={<MdOutlineAddTask style={{ color: "green" }} />}
        />
      </div>
    </section>
  );
}

export default FilterView;
