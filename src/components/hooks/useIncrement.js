import { useState } from "react";

export function useIncrement({base = 0, max = Infinity, min = -Infinity} ) {
    const [state, setState] = useState(base);
    return {
        count: state,
        increment : () => setState(s => s < max ? s + 1 : s),
        decrement : () => setState(s => s > min ? s - 1 : s)
    }
}