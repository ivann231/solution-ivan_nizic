import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 500): T {
    const [debouncedValue, setDeboiuncedValue] = useState(value);

    useEffect(() =>{
        const handler = setTimeout(() => {
            setDeboiuncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}