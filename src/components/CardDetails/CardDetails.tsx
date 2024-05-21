import "./CardDetails.css";
import "../FastighetsCards/FastighetsCard.css";
import { useState } from "react";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdRestoreFromTrash,
  MdOutlineModeEdit,
} from "react-icons/md";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import CardMäklare from "../CardMäklare/CardMäklare";
import { RealEstate } from "../../interfaces/Interfaces";
import Overlay from "../Overlay/Overlay";

interface CardDetailsProps {
  fastighet: RealEstate;
  handleDelete: () => void;
}

function CardDetails({ fastighet, handleDelete }: CardDetailsProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % fastighet.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? fastighet.images.length - 1 : prevIndex - 1
    );
  };
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const confirmDelete = () => {
    handleDelete();
    setIsModalVisible(false);
  };

  const cancelDelete = () => {
    setIsModalVisible(false);
  };
  return (
    <article className="container">
      <div className="card card-details">
        <div className="img-wrapper">
          <img src={fastighet.images[currentImage]} alt="Property" />
          <div className="arrow-button-wrapper">
            <div className="arrow-button left-arrow">
              <button onClick={prevImage}>
                <MdArrowBackIosNew />
              </button>
            </div>
            <div className="arrow-button right-arrow">
              <button onClick={nextImage}>
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
        <div className="box details-box">
          <header className="details-header">
            <h2>{fastighet.address}</h2>
            <h4>{fastighet.place}</h4>
            <p>{fastighet.price} kr</p>
          </header>
          <hr />
          <div className="details-main flex">
            <p>
              Bostadstyp: <span>{fastighet.category}</span>
            </p>
            <p>
              upplåtelseform: <span>{fastighet.contractType}</span>
            </p>
            <p>
              Antal rum: <span>{fastighet.rooms} rum</span>
            </p>
            <p>
              Boarea:
              <span>
                {fastighet.livingArea}
                <span style={{ textTransform: "lowercase" }}>m²</span>
              </span>
            </p>
            <p>
              Byggå: <span>{fastighet.buildYear}</span>
            </p>
            <p>
              visas: <span>{fastighet.showing}</span>
            </p>
          </div>
          <hr />
          <div>
            <h3 className="kontakt">Kontakta Mäklaren</h3>
            <CardMäklare
              name={fastighet.agent.name}
              mobile={fastighet.agent.mobile}
              mail={fastighet.agent.mail}
              address={fastighet.agent.address}
            />
          </div>
          <footer className="details-footer">
            <BtnMedIcon icon={<MdOutlineModeEdit />} title={"Redigera"} />
            <BtnMedIcon
              onClick={handleOpenModal}
              icon={<MdRestoreFromTrash style={{ color: "red" }} />}
              title={"Radera"}
            />
          </footer>
        </div>
      </div>
      {isModalVisible && (
        <Overlay handleCloseForm={handleCloseModal}>
          <>
            <div className="confirm-delete-wrapper">
              <h2>Vill du verkligen ta bort objektet? </h2>
              <div className="confirm-deleteBtn-wrapper">
                <BtnMedIcon title="JA" onClick={confirmDelete} />
                <BtnMedIcon title="Nej" onClick={cancelDelete} />
              </div>
            </div>
          </>
        </Overlay>
      )}
    </article>
  );
}

export default CardDetails;
