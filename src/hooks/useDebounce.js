import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const hanlder = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(hanlder);
        // eslint-disable-next-line
    }, [value]);

    return debounceValue;
}

export default useDebounce;
