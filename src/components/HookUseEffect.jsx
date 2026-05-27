import { useState, useEffect } from "react";
import Input from "./forms/Input";
import Checkbox from "./forms/Checkbox";

function HookUseEffect() {
    const [showInput, setShowInput] = useState(false);
    return <>
        <div className="flex flex-col items-center m-4 gap-2">
            <Checkbox 
                checked={showInput}
                onChange={setShowInput}
                id="titleshow"
                label="Afficher le champ titre"
            />
            {showInput && <EditTitle />}
            <div style={{height: '300vh'}}>

            </div>
        </div>
        
    </>
    
}

function EditTitle() {
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");

    useEffect(() => {  
        const originalTitle = document.title;
        return () => {
            document.title = originalTitle;
        }
    }, []); // Comportement de componentDidMount : s'exécute une fois au montage du composant

    useEffect(() => {
        document.title = title;
    }, [title]);

    return <div className="flex flex-col gap-2">
        <Input placeholder="Modifier le titre" value={title} onChange={setTitle} />
        <Input placeholder="Prénom" value={firstName} onChange={setFirstName} />
    </div>
}

export default HookUseEffect;