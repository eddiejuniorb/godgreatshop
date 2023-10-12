import { Children, createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setauth] = useState({
    email: "",
    token: "",
  });

  return (
    <AuthContext.Provider value={(auth, setauth)}>
      {children}
    </AuthContext.Provider>
  );
};
