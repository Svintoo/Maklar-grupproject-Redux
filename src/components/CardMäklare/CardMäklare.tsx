import "./CardMäklare.css";
import { FiMapPin } from "react-icons/fi";
import { BsTelephoneInbound } from "react-icons/bs";
import { GoMail } from "react-icons/go";
interface CardMäklareProps {
  name: string;
  mobil: string;
  mail: string;
  adress: string;
}

function CardMäklare({ name, mobil, mail, adress }: CardMäklareProps) {
  return (
    <article className="mäklare-wrapper ">
      <h3>{name}</h3>
      <p>
        <span>
          <BsTelephoneInbound />
        </span>
        {mobil}
      </p>
      <p>
        <span>
          <GoMail />
        </span>
        {mail}
      </p>
      <p>
        <span>
          <FiMapPin />
        </span>
        {adress}
      </p>
    </article>
  );
}

export default CardMäklare;
