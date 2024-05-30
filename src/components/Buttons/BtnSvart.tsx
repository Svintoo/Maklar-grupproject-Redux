import React from "react";
import "./Button.css";

interface BtnSvartProps {
  onClick?: () => void;
  title: string;
  className?: string;
  type?: string;
}

const BtnSvart: React.FC<BtnSvartProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="btn-svart flex">
      {title}
    </button>
  );
};

export default BtnSvart;
