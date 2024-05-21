import "../FastighetsCards/FastighetsCard.css";
import "./CardDetails.css";
import img1 from "../../assets/imgs/clay-banks-hC2QBywnLd0-unsplash.jpg";
import img2 from "../../assets/imgs/spacejoy-YI2YkyaREHk-unsplash.jpg";
import img3 from "../../assets/imgs/valentina-locatelli-P8bsrm8KbM0-unsplash.jpg";
import { useState } from "react";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdRestoreFromTrash,
  MdOutlineModeEdit,
} from "react-icons/md";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import CardMäklare from "../CardMäklare/CardMäklare";
const images: string[] = [img1, img2, img3];

function CardDetails() {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <article className="  container ">
      <div className="card card-details">
        <div className="img-wrapper">
          <img src={images[currentImage]} alt="Property" />
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
            <h2>Vattenvägen1</h2>
            <h4>valsta ,sigtuna kommun</h4>
            <p>1 145 000 kr</p>
          </header>
          <hr />
          <div className="details-main flex">
            <p>
              Bostadstyp: <span>lägenhet</span>
            </p>
            <p>
              upplåtelseform: <span>Ägenderätt</span>
            </p>
            <p>
              Antal rum: <span> 3 rum</span>
            </p>
            <p>
              Boarea:
              <span>
                65 <span style={{ textTransform: "lowercase" }}>m²</span>
              </span>
            </p>
            <p>
              Byggå: <span>1989</span>
            </p>
            <p>
              visas: <span>sön 12/5</span>
            </p>
          </div>
          <hr />
          <div>
            <h3 className="kontakt">Kontakta Mäklaren</h3>
            <CardMäklare
              name="motasem"
              mobile="077777777"
              mail="asom@info.se"
              address="södragatan 12 Stockholm"
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
