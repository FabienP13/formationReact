import { useState } from "react";

/**
 *
 * @param {boolean} initial 
 */
export function useToggle(initial = false) {
    const [state, setState] = useState(initial);
    const toggle = () => setState(s => !s);
    return [state, toggle];
}