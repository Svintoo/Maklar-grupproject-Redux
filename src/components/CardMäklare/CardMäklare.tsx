import "./CardMäklare.css";
import { FiMapPin } from "react-icons/fi";
import { BsTelephoneInbound } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { Mäklare } from "../../interfaces/MäklareInterface";

function CardMäklare({ name, mobile, mail, address }: Mäklare) {
  return (
    <article className="mäklare-wrapper ">
      <h3>{name}</h3>
      <p>
        <span>
          <BsTelephoneInbound />
        </span>
        {mobile}
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
        {address}
      </p>
    </article>
  );
}

export default CardMäklare;
