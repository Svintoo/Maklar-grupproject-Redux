import BtnMedIcon from "../Buttons/BtnMedIkon";
import AddObjectBtn from "../addObjectBtn/AddObjectBtn";
import { FaFilter } from "react-icons/fa";
function SearchFilter() {
  return (
    <div
      className="flex"
      style={{
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-around",
        margin: "1rem auto",
      }}
    >
      <div className="flex" style={{ width: "45%", justifyContent: "center" }}>
        <input type="search" placeholder="Sök" />
      </div>
      <div className="flex" style={{ width: "45%", justifyContent: "center" }}>
        <BtnMedIcon title="Filter" icon={<FaFilter />} />
      </div>
      <div className="flex" style={{ width: "45%", justifyContent: "center" }}>
        <AddObjectBtn />
      </div>
    </div>
  );
}

export default SearchFilter;
