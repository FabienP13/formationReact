import { useState } from "react";
import Checkbox from "./forms/Checkbox";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { useIncrement } from "./hooks/useIncrement";
import { useToggle } from "./hooks/useToggle";
import Input from "./forms/Input";
import { useFetch } from "./hooks/useFetch";
//Les hook ne peuvent pas etre utilisés dans des conditions, des boucles ou des fonctions imbriquées. Ils doivent être appelés à chaque rendu du composant dans le même ordre. Cela garantit que React peut suivre correctement l'état et les effets associés à chaque hook.


//SITE LIBRAIRIE HOOKs : https://usehooks.com/ | https://usehooks-ts.com/

function HookPersonnalise() {
    const [checked, toggle] = useToggle();
    const { count, increment, decrement } = useIncrement({
        base: 0,
        max: 10,
        min: 0
    });
    const [name, setName] = useState("");

    
    const {loading,data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&delay=5000');


    useDocumentTitle(name ? `Editer ${name}` : null); // Hook personnalisé qui met à jour le titre du document avec le nom saisi

    return <div>
        <Input value={name} onChange={setName} />
        Compteur { count } 
        <button type="button" className="bg-green-400 rounded-md p-1 m-1 cursor-pointer" onClick={increment}> Incrémenter </button>
        <button type="button" className="bg-red-400 rounded-md p-1 m-1 cursor-pointer" onClick={decrement}> Décrémenter </button>

        {loading && <div>Chargement...</div>}
        {errors && <div className="flex justify-center"><div role="alert" className="p-4 mb-4 text-sm text-fg-danger-strong bg-red-300 w-fit flex items-center rounded-md bg-danger-soft">Erreur : {errors.toString()}</div></div>}
        {data && <div className="ml-5">
                <ul>
                    {data.map(post => <li key={post.id}>{post.title}</li>)}
                </ul>
            </div>}
    </div>
}

export default HookPersonnalise;