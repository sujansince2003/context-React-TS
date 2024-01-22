import { ReactNode } from "react";
import { useState } from "react";
import UserContext from "./UserContext";
import { UserContextType } from "./UserContext";

function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const contextValue: UserContextType = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserContextProvider;
