import { useState, useEffect } from "react";

const useMediQuery = (maxWidth = 500) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
        setIsMobile(mediaQuery.matches);

        const handleChange = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, [maxWidth]);

    return isMobile;
};

export default useMediQuery;
