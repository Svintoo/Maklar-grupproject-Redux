import { useEffect, useState } from "react";
import "./FastighetsCard.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import BtnSvart from "../Buttons/BtnSvart";
import CardDetails from "../CardDetails/CardDetails";
import Overlay from "../Overlay/Overlay";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../main";
import { RealEstate } from "../../interfaces/Interfaces";

function FastighetsCard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fastighets, setFastighets] = useState<RealEstate[]>([]);
  const [selectedFastighet, setSelectedFastighet] = useState<RealEstate | null>(
    null
  );
  const [currentImage, setCurrentImage] = useState<number[]>([]);

  // Hämta dat varje gång datan förändras
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "fastigheter"),
      (snapshot) => {
        const fastighetsList = snapshot.docs.map((doc) => ({
          ...(doc.data() as RealEstate),
          id: doc.id,
        }));
        setFastighets(fastighetsList);
        setCurrentImage(new Array(fastighetsList.length).fill(0)); // Initialize currentImage array
      }
    );
    return () => unsubscribe();
  }, []);

  const nextImage = (index: number) => {
    setCurrentImage((prevIndexes) =>
      prevIndexes.map((currentIndex, i) =>
        i === index
          ? (currentIndex + 1) % fastighets[index].images.length
          : currentIndex
      )
    );
  };

  const prevImage = (index: number) => {
    setCurrentImage((prevIndexes) =>
      prevIndexes.map((currentIndex, i) =>
        i === index
          ? currentIndex === 0
            ? fastighets[index].images.length - 1
            : currentIndex - 1
          : currentIndex
      )
    );
  };

  const handleOpenModal = (id: string) => {
    const selected = fastighets.find((fastighet) => fastighet.id === id);
    setSelectedFastighet(selected || null);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedFastighet(null);
  };

  const fastighetCards = fastighets.map((fastighet, index) => (
    <article className="card" key={fastighet.id}>
      <div className="img-wrapper">
        <img src={fastighet.images[currentImage[index]]} alt="Property" />
        <div className="arrow-button-wrapper">
          <div className="arrow-button left-arrow">
            <button onClick={() => prevImage(index)}>
              <MdArrowBackIosNew />
            </button>
          </div>
          <div className="arrow-button right-arrow">
            <button onClick={() => nextImage(index)}>
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>

      <div className="box">
        <header className="card-fastighets">
          <h2>{fastighet.address}</h2>
          <p className="sub-title">{fastighet.place}</p>
          <p>{fastighet.price}kr</p>
        </header>

        <div className="area">
          <p>{fastighet.livingArea}m²</p>
          <p>{fastighet.rooms} rum</p>
        </div>
        <footer className="visas">
          <small>VISAS: {fastighet.showing}</small>
          <BtnSvart
            onClick={() => fastighet.id && handleOpenModal(fastighet.id)}
            title="Fler Detaljer"
          />
        </footer>
      </div>
    </article>
  ));

  return (
    <>
      {fastighetCards}
      {isModalVisible && selectedFastighet && (
        <Overlay handleCloseForm={handleCloseModal}>
          <CardDetails fastighet={selectedFastighet} />
        </Overlay>
      )}
    </>
  );
}

export default FastighetsCard;
