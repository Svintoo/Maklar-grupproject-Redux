import "../FastighetsCards/FastighetsCard.css";
import "./CardDetails.css";
import img1 from "../../assets/imgs/clay-banks-hC2QBywnLd0-unsplash.jpg";
import img2 from "../../assets/imgs/spacejoy-YI2YkyaREHk-unsplash.jpg";
import img3 from "../../assets/imgs/valentina-locatelli-P8bsrm8KbM0-unsplash.jpg";
import { useState } from "react";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdArrowBack,
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
    <article className=" card card-details">
      <div className="back-btn">
        <BtnMedIcon title="Tillbaka" icon={<MdArrowBack />} />
      </div>
      <div className="img-wrapper  ">
        <button onClick={prevImage} className="arrow-button left-arrow">
          <MdArrowBackIosNew />
        </button>
        <img src={images[currentImage]} alt="Property" />
        <button onClick={nextImage} className="arrow-button right-arrow">
          <MdArrowForwardIos />
        </button>
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
            mobil="077777777"
            mail="asom@info.se"
            adress="södragatan 12 Stockholm"
          />
        </div>
        <footer className="details-footer">
          <BtnMedIcon icon={<MdOutlineModeEdit />} title={"Redigera"} />
          <BtnMedIcon
            icon={<MdRestoreFromTrash style={{ color: "red" }} />}
            title={"Redera"}
          />
        </footer>
      </div>
    </article>
  );
}

export default CardDetails;
