import { useEffect } from "react";
import { useState } from "react";

export function useHashNavigation() {
    const  [hash, setHash] = useState(location.hash);

    useEffect(() => {
        const handlehashChange = () => { setHash(location.hash); };
        window.addEventListener("hashchange", handlehashChange);
        return () => {
            window.removeEventListener("hashchange", handlehashChange)
        };
    }, []);

    const cleanedHash = hash.replace("#", "").toLowerCase()

    return {
        page :  cleanedHash ? cleanedHash.split(':')[0] : "home",
        param : cleanedHash.split(':')[1] 
    }
}