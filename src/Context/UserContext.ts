import { Dispatch, SetStateAction, createContext } from "react";

export interface UserContextType {
  user: { [key: string]: any } | null;
  setUser: Dispatch<SetStateAction<{ [key: string]: any }>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
