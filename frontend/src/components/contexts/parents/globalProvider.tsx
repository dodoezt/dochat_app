'use client'
import { useContext, createContext, } from "react";
import { AuthProvider, useAuthContext } from "../children/authContext";

export const GlobalContext = createContext<any>(null);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <InternalGlobalProvider>
                {children}
            </InternalGlobalProvider>
        </AuthProvider>
    );
}  

const InternalGlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const auth = useAuthContext();

    return (
        <GlobalContext.Provider value={auth}>
            {children}
        </GlobalContext.Provider>
    );
}

