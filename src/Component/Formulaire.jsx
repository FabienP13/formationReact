import { useState } from "react";

function Formulaire() {

    //Champ contrôlé : la valeur de l'input est gérée par le state du composant 
    //Avantages : on peut facilement accéder à la valeur de l'input, faire des validations, etc.
    //Champ non contrôlé : la valeur de l'input est gérée par le DOM, on peut y accéder via une ref

    const [firstname, setFirstname] = useState("John Doe");
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setFirstname(event.target.value);
    }

    const toggleCheck = () => {
        setChecked(!checked);
    }

    const reset = () => {
        setFirstname("");
        setChecked(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return <>
    <h6 className="font-bold">Formation Formulaire </h6>
        <form action="" className="flex flex-col px-2 mt-3 items-start max-w-sm" onSubmit={handleSubmit}>
            <label htmlFor="firstname">Prénom :</label>
            <input type="text" className="border rounded-lg py-1 px-2 focus:border-blue-500 focus:outline-none" id="firstname" name="firstname" value={firstname} onChange={handleChange} />
            <label htmlFor="checked">
                <input type="checkbox" id="checked" name="checked" checked={checked} onChange={toggleCheck} />
                Cocher
            </label>
            
            valeur : {firstname}
            <button type="button" className="bg-red-400 rounded-md p-1 m-1 cursor-pointer" onClick={reset}>
                Reset input
            </button>
            {checked && <button type="submit" className="bg-blue-400 rounded-md p-1 m-1 cursor-pointer">
                Soumettre
            </button>}
            
        </form>
    </>
}

export default Formulaire;