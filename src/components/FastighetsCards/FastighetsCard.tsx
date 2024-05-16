import "./FastighetsCard.css";
import img1 from "../../assets/imgs/clay-banks-hC2QBywnLd0-unsplash.jpg";
import img2 from "../../assets/imgs/spacejoy-YI2YkyaREHk-unsplash.jpg";
import img3 from "../../assets/imgs/valentina-locatelli-P8bsrm8KbM0-unsplash.jpg";
import BtnSvart from "../Buttons/BtnSvart";
import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const images: string[] = [img1, img2, img3];

function FastighetsCard() {
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
    <article className="card">
      <div className="img-wrapper  ">
        <button onClick={prevImage} className="arrow-button left-arrow">
          <MdArrowBackIosNew />
        </button>
        <img src={images[currentImage]} alt="Property" />
        <button onClick={nextImage} className="arrow-button right-arrow">
          <MdArrowForwardIos />
        </button>
      </div>

      <div className="box">
        <header className="card-fastighets">
          <h2>Vattenvägen1</h2>
          <p className="sub-title">valsta, sigtuna kommun</p>
          <p>1 145 000 kr</p>
        </header>

        <div className="area">
          <p>105+55 m²</p>
          <p>3 rum</p>
        </div>
        <footer className="visas">
          <small>VISAS:sön 12/5</small>
          <BtnSvart title="More Details" />
        </footer>
      </div>
    </article>
  );
}

export default FastighetsCard;
