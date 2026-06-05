import { useRef } from "react";
import { useEffect } from "react"

export function Modal({children}) {
    const dialogRef = useRef(null);

    useEffect(() => {
        dialogRef.current.showModal();
    }, [])
    return <dialog ref={dialogRef}>
        {children}
    </dialog>
}