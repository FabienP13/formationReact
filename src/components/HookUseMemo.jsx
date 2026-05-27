import { useMemo, useState } from "react";
import Input from "./forms/Input";

function HookUseMemo() {

    // useMemo est un hook qui permet de mémoriser une valeur calculée à partir d'une fonction, et de ne la recalculer que lorsque les dépendances changent.
    const [firstName, setFirstName] = useState('John');
    const [password, setPassword] = useState('MotDePasse');
    const security = useMemo (() => {
        return passwordSecurity(password);
    }, [password])

    return <div className="flex flex-col items-center mt-5 gap-4">
        <Input 
            label="Nom d'utilisateur" 
            value={firstName} 
            onChange={setFirstName} 
        />
        <Input 
            label="Mot de passe" 
            value={password} 
            onChange={setPassword} 
            type="password"
        />
        <p>
            Sécurité : {security}
        </p>
    </div>
}

function passwordSecurity(password) {
    //fausse lenteur 
    let startTime = performance.now();
    while(performance.now() - startTime < 200) {
        // Attente de 1 seconde
    }
    if(password.length < 3){
        return "Faible";
    } else if (password.length < 6){
        return "Moyenne";
    }
    return "Forte";
}


export default HookUseMemo;