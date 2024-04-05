import { createContext, useState } from "react";

const emptyUser: any = {uid: ""};

export const UserContext = createContext(emptyUser as any);

export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState(emptyUser as any);

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
};