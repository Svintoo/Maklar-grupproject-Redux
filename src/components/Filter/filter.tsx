import Select from "react-select";
import { RoomformOption, RoomareaformOption, PrisformOption, PlatsformOption } from "../AddObject/selectOptions";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import { MdOutlineAddTask } from "react-icons/md";

function FilterView() {
    return(
        <section className="filterview" >
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
        //   onClick={""}
            icon={<MdOutlineAddTask style={{ color: "green" }} />}
        />
        </div>
        </section>
    )
}

export default FilterView;