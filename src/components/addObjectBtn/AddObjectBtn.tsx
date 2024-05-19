import { useState } from "react";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import { MdAddCircleOutline } from "react-icons/md";
import AddObject from "../AddObject/AddObject";
import "./AddObjectBtn.css";
function AddObjectBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenForm = () => {
    setIsVisible(true);
  };

  const handleCloseForm = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="modal-background">
          <div className="modal">
            <AddObject handleCloseForm={handleCloseForm} />
          </div>
        </div>
      )}
      <BtnMedIcon
        title="Lägg till objekt"
        icon={<MdAddCircleOutline />}
        onClick={handleOpenForm}
      />
    </>
  );
}

export default AddObjectBtn;
