import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./styles.css";

interface ContactCardProps {
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  phoneNumber,
  email,
  address,
}) => {
  return (
    <div className="contact_card">
      <h3 className="contact_name">{name}</h3>
      <p className="contact_item">
        <FaPhone className="contact_icon" />
        {phoneNumber}
      </p>
      <p className="contact_item">
        <FaEnvelope className="contact_icon" />
        {email}
      </p>
      <p className="contact_item">
        <FaMapMarkerAlt className="contact_icon" />
        {address}
      </p>
    </div>
  );
};

export default ContactCard;
