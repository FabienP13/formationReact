import { useState } from "react";
import CGUCheckbox from "./CGUCheckbox";

function FluxData() {

    // Reverse data flow : un composant enfant peut faire remonter des données à son parent via une fonction passée en props avec un callback
    const [isTermAccepted, setIsTermAccepted] = useState(false);
    return (
        <>
            <form className="p-5">
                <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
                <button disabled={!isTermAccepted} className={`${isTermAccepted ? 'bg-blue-400 cursor-pointer' : 'bg-gray-400'} rounded-md p-1 m-1 `}>Envoyer le formulaire</button>
            </form>
        </>
    )

}

export default FluxData;