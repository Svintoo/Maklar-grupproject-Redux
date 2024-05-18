import "./AddObject.css";
import Select from "react-select";
import { bostadsTypOptions } from "./selectOptions";
import { RealEstate } from "../../interfaces/Interfaces";
import { useState } from "react";
import { Mäklare } from "../../interfaces/MäklareInterface";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import moment from "moment";
import { MdDone } from "react-icons/md";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../main";

function AddObject() {
  const initialState: RealEstate = {
    category: "",
    place: "",
    address: "",
    rooms: "",
    price: 0,
    contractType: "",
    livingArea: "",
    showing: "",
    buildYear: "",
    agent: {
      name: "",
      mobile: "",
      mail: "",
      address: "",
    } as Mäklare,
  };

  const [realEstate, setRealEstate] = useState<RealEstate>(initialState);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRealEstate({
      ...realEstate,
      [name]: value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (selectedOption: any) => {
    setSelectedCategory(selectedOption);
    setRealEstate({
      ...realEstate,
      category: selectedOption ? selectedOption.value : "",
    });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const isValidDate = moment(selectedDate, "YYYY-MM-DD", true).isValid();

    if (isValidDate) {
      const formattedDate = moment(selectedDate, "YYYY-MM-DD").format(
        "ddd D/M"
      );
      setRealEstate({
        ...realEstate,
        showing: formattedDate,
      });
    } else {
      setRealEstate({
        ...realEstate,
        showing: "",
      });
    }
  };

  const handleAgentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRealEstate({
      ...realEstate,
      agent: {
        ...realEstate.agent,
        [name]: value,
      },
    });
  };

  const handleSaveClick = async () => {
    // Check if all required fields are filled
    if (
      !realEstate.category ||
      !realEstate.place ||
      !realEstate.address ||
      !realEstate.rooms ||
      realEstate.price <= 0 ||
      !realEstate.contractType ||
      !realEstate.livingArea ||
      !realEstate.showing ||
      !realEstate.buildYear ||
      !realEstate.agent.name ||
      !realEstate.agent.mobile ||
      !realEstate.agent.mail ||
      !realEstate.agent.address
    ) {
      setError("Vänligen fyll i alla obligatoriska fält.");
      return;
    }

    try {
      await addDoc(collection(db, "fastigheter"), realEstate);
      setError(null);
      console.log(realEstate);
      setRealEstate(initialState);
      setSelectedCategory(null);
    } catch (error) {
      console.log(error);
      setError("Ett fel inträffade vid sparandet.");
    }
  };

  return (
    <>
      <section className="flex  add-object-input-wrapper">
        {/*--------------- start fastighet info --------------*/}
        <input
          type="text"
          name="address"
          placeholder="Adress"
          value={realEstate.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="place"
          placeholder="Stad"
          value={realEstate.place}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Pris"
          value={realEstate.price === 0 ? "" : realEstate.price}
          onChange={handleInputChange}
        />
        <Select
          placeholder="Bostadstyp"
          options={bostadsTypOptions}
          className="add-object-select custom-select"
          value={selectedCategory}
          onChange={handleSelectChange}
        />
        <input
          type="text"
          name="contractType"
          placeholder="Upplåtelseform"
          value={realEstate.contractType}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="rooms"
          placeholder="Antal rum"
          value={realEstate.rooms}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="livingArea"
          placeholder="Boarea"
          value={realEstate.livingArea}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="buildYear"
          placeholder="Byggår"
          value={realEstate.buildYear}
          onChange={handleInputChange}
        />
        <label htmlFor="visas">Visas:</label>
        <input
          type="date"
          id="visas"
          onChange={handleDateChange}
          value={
            moment(realEstate.showing, "ddd D/M").isValid()
              ? moment(realEstate.showing, "ddd D/M").format("YYYY-MM-DD")
              : ""
          }
        />
        {/*--------------- end fastighet info --------------*/}

        {/*-------------- strat agent info ------------------*/}
        <hr style={{ width: "60%", margin: "10px" }} />
        <h3>Mäklare</h3>

        <input
          type="text"
          placeholder="Namn"
          name="name"
          value={realEstate.agent.name}
          onChange={handleAgentInputChange}
        />
        <input
          type="text"
          placeholder="Mobil"
          name="mobile"
          value={realEstate.agent.mobile}
          onChange={handleAgentInputChange}
        />
        <input
          type="email"
          placeholder="Mail"
          name="mail"
          value={realEstate.agent.mail}
          onChange={handleAgentInputChange}
        />
        <input
          type="text"
          placeholder="Adress"
          name="address"
          value={realEstate.agent.address}
          onChange={handleAgentInputChange}
        />

        {/*-------------- end agent info ------------------*/}

        {error && <p style={{ color: "red" }}>{error}</p>}
        <BtnMedIcon
          type="submit"
          title="spara"
          onClick={handleSaveClick}
          icon={<MdDone style={{ color: "green" }} />}
        />
      </section>
    </>
  );
}

export default AddObject;
