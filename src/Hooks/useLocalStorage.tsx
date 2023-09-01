import { useState } from "react";

// function useLocalStorage<T>(key: string, initialValue: T): [T, (newValue: T) => void] {
//     const isClient = typeof window !== 'undefined';
//     const [storedValue, setStoredValue] = useState<T>(() => {
//         try {
//             const item = isClient ? localStorage.getItem(key) : null;
//             return item ? JSON.parse(item) : initialValue;
//         } catch (error) {
//             console.error(`Error reading from localStorage: ${error}`);
//             return initialValue;
//         }
//     });

//     const setValue = (newValue: T) => {
//         try {
//             setStoredValue(newValue);
//             localStorage.setItem(key, JSON.stringify(newValue));
//         } catch (error) {
//             console.error(`Error writing to localStorage: ${error}`);
//         }
//     };

//     return [storedValue, setValue];
// }

// export default useLocalStorage;



function useLocalStorage<T>(key: string, initialValue: T): [T, (newValue: T) => void] {
    const isClient = typeof window !== 'undefined';

    // Get the initial value from localStorage or use the provided initialValue
    const storedValue = isClient ? localStorage.getItem(key) : null;
    const initial: T = storedValue ? JSON.parse(storedValue) : initialValue;

    // Create a state to hold the current value
    const [value, setValue] = useState<T>(initial);

    // Update the value in localStorage whenever it changes
    const updateValue = (newValue: T) => {
        setValue(newValue);
        if (isClient) {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    };

    return [value, updateValue];
};

export default useLocalStorage;

