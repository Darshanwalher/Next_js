'use client'
import { api } from "@/lib/api";
import { createContext, useContext, useEffect, useState } from "react";

const Auth = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const hydrateUser = async () => {
        try {
            const res = await api.get('/api/auth/me');
            console.log(res.data);
            setUser(res.data?.data || res.data?.user || null);
        } catch (error) {
            console.log("error in hydrating user", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        hydrateUser();
    }, []);

    return <Auth.Provider value={{user, setUser, loading, hydrateUser}}>{children}</Auth.Provider>
}

export const useAuth = () => {
    return useContext(Auth);
}
