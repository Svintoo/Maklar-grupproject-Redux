import "../FastighetsCards/FastighetsCard.css";
import "./CardDetails.css";
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

interface CardDetailsProps {
  fastighet: RealEstate;
}

function CardDetails({ fastighet }: CardDetailsProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % fastighet.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? fastighet.images.length - 1 : prevIndex - 1
    );
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
              icon={<MdRestoreFromTrash style={{ color: "red" }} />}
              title={"Radera"}
            />
          </footer>
        </div>
      </div>
    </article>
  );
}

export default CardDetails;
