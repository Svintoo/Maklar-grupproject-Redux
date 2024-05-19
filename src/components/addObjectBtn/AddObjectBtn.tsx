import { useState } from "react";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import { MdAddCircleOutline } from "react-icons/md";
import AddObject from "../AddObject/AddObject";

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
      {isVisible ? (
        <AddObject handleCloseForm={handleCloseForm} />
      ) : (
        <BtnMedIcon
          title="Lägg till objekt"
          icon={<MdAddCircleOutline />}
          onClick={handleOpenForm}
        />
      )}
    </>
  );
}

export default AddObjectBtn;
