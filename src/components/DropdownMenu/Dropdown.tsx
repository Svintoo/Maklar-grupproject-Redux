interface DropdownMenuProps {
  isOpen: boolean;
  isLoggedIn: boolean;
  onSignOut: () => void;
  onSignIn: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, isLoggedIn, onSignOut, onSignIn }) => {
  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      {isOpen && (
        <ul className="dropdown-menu">
          {isLoggedIn ? (
            <>
              <li>Lägg till fastighet</li>
              <li onClick={onSignOut}>Logga ut</li>
            </>
          ) : (
            <li onClick={onSignIn}>Logga in</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;