import { useState,useCallback } from "react";

export function useIncrement({base = 0, max = Infinity, min = -Infinity} ) {
    const [state, setState] = useState(base);
    return {
        count: state,
        increment : useCallback(() => setState(s => s < max ? s + 1 : s), [max]),
        decrement : useCallback(() => setState(s => s > min ? s - 1 : s), [min])
    }
}