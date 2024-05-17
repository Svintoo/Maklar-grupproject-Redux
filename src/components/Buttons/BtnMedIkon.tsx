import "./Button.css";
interface BtnMedIconProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  title: string;
}

const BtnMedIcon: React.FC<BtnMedIconProps> = ({ icon, title, onClick }) => {
  return (
    <button onClick={onClick} className="icon-btn flex">
      <span className="icon flex">{icon}</span>
      <span>{title}</span>
    </button>
  );
};

export default BtnMedIcon;
