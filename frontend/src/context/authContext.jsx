import { createContext, useEffect, useState } from "react";
import { post } from "../utils/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        const res = await post('/api/login', inputs);
        setCurrentUser(res.others);
        console.log(res.others, "res");

        return res;
    };

    const logout = async () => {
        localStorage.removeItem("user");
        await post('/api/logout');
        setCurrentUser(null);
    };

    useEffect(() => {
        // Only set the item in localStorage if currentUser is not null
        if (currentUser) {
            localStorage.setItem("user", JSON.stringify(currentUser));
        }
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// export { AuthContext, AuthContextProvider };
