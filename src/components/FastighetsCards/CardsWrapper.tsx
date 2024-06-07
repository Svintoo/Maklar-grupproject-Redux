import React, { ReactNode, useState } from "react";
import "../../components/FastighetsCards/FastighetsCard.css";
import BtnMedIcon from "../Buttons/BtnMedIkon";
import { MdExpandMore } from "react-icons/md";

interface CardsWrapperProps {
  children: ReactNode;
}

function CardsWrapper({ children }: CardsWrapperProps) {
  const [visibleCards, setVisibleCards] = useState(4);

  const showMoreCards = () => {
    setVisibleCards((prevVisible) => prevVisible + 4);
  };

  return (
    <>
      <section className="cards-wrapper container">
        {React.Children.toArray(children).slice(0, visibleCards)}
        <div className="cards-wrapper-btn aligned">
          {React.Children.count(children) > visibleCards && (
            <BtnMedIcon
              icon={<MdExpandMore />}
              title="Visa Mer"
              onClick={showMoreCards}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default CardsWrapper;
