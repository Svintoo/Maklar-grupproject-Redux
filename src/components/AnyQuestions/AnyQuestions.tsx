import React from "react";
import "./styles.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

interface QuestionCardProps {
  phoneNumber: string;
  email: string;
}

const AnyQuestions: React.FC<QuestionCardProps> = () => {
  return (
    <div className="q_container">
      <h2>Have Any Question?</h2>
      <div className="q_text_container">
        <p className="q_text">
          Do not hesitate to give us a call. We are an expert team and we are
          happy to talk to you.
        </p>
      </div>

      <div className="qContactInfo">
        <div className="qContactItem">
          <FaPhoneAlt className="qIcon" />
          <p>+467 335 89 67</p>
        </div>
        <div className="qContactItem">
          <IoMdMail className="qIcon" />
          <p>bostadsfynd@lg.se</p>
        </div>
      </div>
    </div>
  );
};

export default AnyQuestions;
