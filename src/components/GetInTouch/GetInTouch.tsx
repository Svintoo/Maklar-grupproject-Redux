import React from "react";
import "./styles.css";
import ContactCard from "./ContactCard";

const GetInTouch: React.FC = () => {
  const contacts = [
    {
      name: "Inger Björkman",
      phoneNumber: "070897654",
      email: "i.bjorkman@lg.se",
      address: "Karlatornet Skylevel 2",
    },
    {
      name: "Inger Björkman",
      phoneNumber: "070897654",
      email: "Götaverksgatan 2",
      address: "Karlatornet Skylevel 2",
    },
    {
      name: "Marta Björk",
      phoneNumber: "070897654",
      email: "m.bjork@lg.se",
      address: "Karlatornet Skylevel 2",
    },
    {
      name: "Inger Björkman",
      phoneNumber: "070897654",
      email: "Götaverksgatan 2",
      address: "Karlatornet Skylevel 2",
    },
  ];
  return (
    <div className="intouch_section">
      <h2>Get In Touch</h2>
      <p className="card_desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
        voluptatem! Fugit itaque sapiente vel ipsum?
      </p>
      <div className="card_container">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            phoneNumber={contact.phoneNumber}
            email={contact.email}
            address={contact.address}
          />
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
