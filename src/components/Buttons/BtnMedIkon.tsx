import "./Button.css";
interface BtnMedIconProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  type?: string;
  title: string;
}

const BtnMedIcon: React.FC<BtnMedIconProps> = ({ icon, title, onClick }) => {
  return (
    <button onClick={onClick} className="icon-btn ">
      <span className="icon flex">{icon}</span>
      <span>{title}</span>
    </button>
  );
};

export default BtnMedIcon;
