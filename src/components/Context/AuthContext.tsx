import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";

interface AuthContextProps {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(() => {
    const savedAuth = localStorage.getItem("isLogged");
    return savedAuth ? JSON.parse(savedAuth) : false;
  });

  useEffect(() => {
    localStorage.setItem("isLogged", JSON.stringify(isLogged));
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
