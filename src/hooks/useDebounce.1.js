import { useEffect, useState } from 'react';

export function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const hanlder = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(hanlder);
        // eslint-disable-next-line
    }, [value]);

    return debounceValue;
}
