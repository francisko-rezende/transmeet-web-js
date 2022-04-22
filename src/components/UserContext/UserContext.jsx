import React from "react";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [userData, setUserData] = React.useState({
    token_access: "",
    account: {},
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
