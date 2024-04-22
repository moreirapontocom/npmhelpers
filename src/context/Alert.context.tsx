import { createContext, useState } from "react";

export const AlertContext = createContext<any>(null);

export const AlertProvider = ({ children }: any) => {
  const alertDefaultData: any = {
    type: "",
    message: "",
  };

  const [alert, setAlert] = useState(alertDefaultData as any);

  return <AlertContext.Provider value={{alert, setAlert}}>{children}</AlertContext.Provider>
};