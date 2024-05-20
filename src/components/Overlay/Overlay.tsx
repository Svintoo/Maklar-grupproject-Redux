import React from "react";
import "./Overlay.css";
import { MdClose } from "react-icons/md";

interface OverlayProps {
  handleCloseForm: () => void;
  children: React.ReactNode;
}

function VisaDetaljer({ handleCloseForm, children }: OverlayProps) {
  return (
    <div className="modal-background">
      <div className="modal">
        <div className="close-modal-btn">
          <button className="close-btn" onClick={handleCloseForm}>
            <MdClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default VisaDetaljer;
