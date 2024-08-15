import { getCurrentUser } from "@/lib/appwrite";

import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext('');
export const useGlobalContext = () => useContext
(GlobalContext);

const GlobalProvider = ({ children }) => {
    

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
   getCurrentUser.then({res}) => {
    if(res){
        setIsLoggedIn(true);
        setUser(res)
    }
   }
    }, []);
    
     
    return (
        <GlobalContext.Provider>
        {children}
        </GlobalContext.Provider>
    )
}
