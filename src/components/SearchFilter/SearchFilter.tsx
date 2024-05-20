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
      <div style={{ width: "34%" }}>
        <input type="search" placeholder="Sök" />
      </div>
      <div style={{ width: "34%" }}>
        <BtnMedIcon title="Filter" icon={<FaFilter />} />
      </div>
      <div style={{ width: "34%" }}>
        <AddObjectBtn />
      </div>
    </div>
  );
}

export default SearchFilter;
