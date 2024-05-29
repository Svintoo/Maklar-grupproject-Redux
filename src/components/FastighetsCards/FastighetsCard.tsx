import { useEffect, useState } from "react";
import "./FastighetsCard.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import BtnSvart from "../Buttons/BtnSvart";
import CardDetails from "../CardDetails/CardDetails";
import Overlay from "../Overlay/Overlay";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../main";
import { RealEstate } from "../../interfaces/Interfaces";
import CardsWrapper from "./CardsWrapper";

interface FastighetsCardProps {
  rangeValue?: number;
}

function FastighetsCard({ rangeValue }: FastighetsCardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fastighets, setFastighets] = useState<RealEstate[]>([]);
  const [selectedFastighetId, setSelectedFastighetId] = useState<string | null>(
    null
  );
  const [currentImage, setCurrentImage] = useState<number[]>([0]);

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

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "fastigheter", id));
    handleCloseModal();
  };

  const handleOpenModal = (id: string) => {
    setSelectedFastighetId(id);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedFastighetId(null);
  };

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

  const filteredFastighets = fastighets.filter(
    (fastighet) =>
      rangeValue === undefined || Number(fastighet.rooms) === rangeValue
  );

  const hasMatchingResults = filteredFastighets.length > 0;

  const fastighetCards = (
    hasMatchingResults ? filteredFastighets : fastighets
  ).map((fastighet, index) => (
    <article className="card card-fastighet" key={fastighet.id}>
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

  const selectedFastighet = fastighets.find(
    (fastighet) => fastighet.id === selectedFastighetId
  );

  return (
    <>
      <div>
        {!hasMatchingResults && (
          <p
            style={{
              textAlign: "center",
              margin: "2rem",
              fontSize: "1.2rem",
              color: "red",
            }}
          >
            Det finns inga fastigheter som matchar din filter
          </p>
        )}
      </div>
      <CardsWrapper>{fastighetCards}</CardsWrapper>
      {isModalVisible && selectedFastighet && (
        <Overlay handleCloseForm={handleCloseModal}>
          <CardDetails
            fastighet={selectedFastighet}
            handleDelete={() =>
              selectedFastighet.id && handleDelete(selectedFastighet.id)
            }
          />
        </Overlay>
      )}
    </>
  );
}

export default FastighetsCard;
