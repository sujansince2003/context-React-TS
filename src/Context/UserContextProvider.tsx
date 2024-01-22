import { ReactNode } from "react";
import { useState } from "react";
import UserContext from "./UserContext";

function USerContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default USerContextProvider;
