import Select from "react-select";
import { RoomformOption, RoomareaformOption, PrisformOption, PlatsformOption } from "../AddObject/selectOptions";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import { MdOutlineAddTask } from "react-icons/md";
import React, { useState } from "react";

interface SearchFilterProps {
    setRangeValue: React.Dispatch<React.SetStateAction<number>>;
  }

function FilterView({ setRangeValue }: SearchFilterProps) { // Ta emot setRangeValue som prop

    const [rangeValue, setRangeValueLocal] = useState(1);  //setRangeValue

    const handleSave = () => {
    const filterOptions = {
    rooms: rangeValue,
    };
    console.log("Saved filter options:", filterOptions);
    setRangeValue(rangeValue); // Uppdatera rangeValue i App-komponenten
};

    return(
        <section className="filterview" >

            <div>
            <input type="range" id="rooms" name="rooms" min="1" max="10" value={rangeValue}
                    onChange={(e) => setRangeValueLocal(Number(e.target.value))}  //setRangeValue
            />
            <label htmlFor="rooms"> {rangeValue} Rooms</label>
            </div>

            <Select
            placeholder="Rooms"
            options={RoomformOption}
            className="add-object-select custom-select"
            />
            <Select
            placeholder="Pris"
            options={PrisformOption}
            className="add-object-select custom-select"
            />
            <Select
            placeholder="area"
            options={RoomareaformOption}
            className="add-object-select custom-select"
            />
            <Select
            placeholder="Plats"
            options={PlatsformOption}
            className="add-object-select custom-select"
            />
            
        <div className="add-object-submit-btn">
        <BtnMedIcon
            type="submit"
            title="spara"
            onClick={handleSave}
            icon={<MdOutlineAddTask style={{ color: "green" }} />}
        />
        </div>
        </section>
    )
}

export default FilterView;