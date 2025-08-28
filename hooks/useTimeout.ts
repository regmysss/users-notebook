import { useEffect, useRef } from "react";

export const useTimeout = (callback: () => void, delay: number) => {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const fnId = setTimeout(() => { savedCallback.current() }, delay);

        return () => clearTimeout(fnId);
    }, [delay]);
}