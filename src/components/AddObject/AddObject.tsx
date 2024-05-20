import React, { useState } from "react";
import Select from "react-select";
import moment from "moment";
import { MdDelete, MdOutlineAddTask } from "react-icons/md";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../main";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { bostadsTypOptions, upplåtelseformOption } from "./selectOptions";
import { RealEstate } from "../../interfaces/Interfaces";
import { Mäklare } from "../../interfaces/MäklareInterface";
import "./AddObject.css";
import BtnMedIcon from "../Buttons/BtnMedIkon";

const initialState: RealEstate = {
  images: [],
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

function AddObject() {
  const [realEstate, setRealEstate] = useState<RealEstate>(initialState);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([]);

  const handleSaveClick = async () => {
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
      const imageUrls = [];
      if (realEstate.images.length > 0) {
        for (const image of realEstate.images) {
          if (typeof image === "object" && image !== null && "name" in image) {
            const storageRef = ref(storage, `images/${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);
            const imageUrl = await getDownloadURL(snapshot.ref);
            imageUrls.push(imageUrl);
          }
        }
      }

      const realEstateData = {
        ...realEstate,
        images: imageUrls,
      };
      await addDoc(collection(db, "fastigheter"), realEstateData);

      setError(null);
      console.log(realEstateData);
      setRealEstate(initialState);
      setSelectedCategory(null);
    } catch (error) {
      console.error(error);
      setError("Ett fel inträffade vid sparandet.");
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const files = e.target.files;
      if (files) {
        // If input type is file (for images)
        setRealEstate({
          ...realEstate,
          images: Array.from(files), // Convert FileList to array of files
        });
        //  Display the selected images immediately
        const urls = Array.from(files).map((file) => URL.createObjectURL(file));
        setUploadedImageUrls(urls);
      }
    } else {
      setRealEstate({
        ...realEstate,
        [name]: value,
      });
    }
  };

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value, files } = e.target;
  //   if (files) {
  //     // If input type is file (for images)
  //     setRealEstate({
  //       ...realEstate,
  //       images: Array.from(files), // Convert FileList to array of files
  //     });

  //     // Display the selected images immediately
  //     const urls = Array.from(files).map((file) => URL.createObjectURL(file));
  //     setUploadedImageUrls(urls);
  //   } else {
  //     setRealEstate({
  //       ...realEstate,
  //       [name]: value,
  //     });
  //   }
  // };

  const handleDeleteImage = (index: number) => {
    const newImages = [...realEstate.images];
    newImages.splice(index, 1);
    setRealEstate({ ...realEstate, images: newImages });

    // Also remove the corresponding URL from the displayed images
    const newUrls = [...uploadedImageUrls];
    newUrls.splice(index, 1);
    setUploadedImageUrls(newUrls);
  };

  const renderUploadedImages = () => {
    return uploadedImageUrls.map((url, index) => (
      <div key={index} className="uploaded-image">
        <img src={url} alt={`Uploaded ${index}`} />
        <button
          onClick={() => handleDeleteImage(index)}
          className="delete-image-button"
        >
          <MdDelete /> Radera
        </button>
      </div>
    ));
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

  return (
    <>
      <div className="add-object-title">
        <h2>Lägg till fastigheter</h2>
      </div>
      <section className="flex  add-object-input-wrapper">
        {/*--------------- start fastighet info --------------*/}
        <div className="fastighet-input-wrapper ">
          <label htmlFor="images">Lägg till bilder</label>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleInputChange}
          />
          <div className="uploaded-image-container ">
            {renderUploadedImages()}
          </div>

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

          <Select
            placeholder="Upplåtelseform"
            options={upplåtelseformOption}
            className="add-object-select custom-select "
            value={upplåtelseformOption.find(
              (option) => option.value === realEstate.contractType
            )}
            onChange={(selectedOption) =>
              handleInputChange({
                target: {
                  name: "contractType",
                  value: selectedOption ? selectedOption.value : "",
                },
              } as React.ChangeEvent<HTMLInputElement>)
            }
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
        </div>
        {/*--------------- end fastighet info --------------*/}
        {/*-------------- strat agent info ------------------*/}
        <div className="agent-input-wrapper ">
          <hr style={{ width: "60%", margin: "10px auto" }} />
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
          {error && (
            <p style={{ color: "red", margin: ".3rem auto" }}>{error}</p>
          )}
        </div>
        {/*-------------- end agent info ------------------*/}
      </section>
      <div className="add-object-submit-btn">
        <BtnMedIcon
          type="submit"
          title="spara"
          onClick={handleSaveClick}
          icon={<MdOutlineAddTask style={{ color: "green" }} />}
        />
      </div>
    </>
  );
}

export default AddObject;
