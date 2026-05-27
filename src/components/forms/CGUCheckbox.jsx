function CGUCheckbox ({checked, onCheck}) {
        return <div>
            <label>
                <input 
                type="checkbox" 
                checked={checked} 
                id="" 
                onChange={(e) => onCheck(e.target.checked)} />
                Accepter les conditions d'utilisation
            </label>
        </div>
    }

    export default CGUCheckbox;