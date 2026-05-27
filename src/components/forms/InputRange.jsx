
/**
 * Permet de filtrer par prix
 *
 * @param {{ value: any; id: any; label: any; onChange: any; }} param0 
 * @param {string} param0.value 
 * @param {string} param0.id 
 * @param {string} param0.label 
 * @param {(s: string) => void} param0.onChange 
  
 */
function InputRange({value,id,label,onChange}) {
    return <div className="flex flex-col">
            <label htmlFor={id}>
                {label}
            </label>
            <input type="range" name="prix" 
            id={id} 
            min={0} 
            max={10} 
            value={value} onChange={(e) => {onChange(e.target.value)}} />            
        </div>
}
export default InputRange;