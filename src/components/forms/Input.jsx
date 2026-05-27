
/**
 * 
 *
 * @param {{ placeholder: any; value: any; onChange: any; }} props 
 * @param {string} props.placeholder 
 * @param {string} props.value 
 * @param {(s: string) => void } props.onChange 
 */
function Input({placeholder,value,onChange}) {
    return <>      
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="block min-w-0 grow border border-gray-500 rounded-lg  py-1.5 p-2 text-base text-gray-900 placeholder:text-gray-500 focus:outline-indigo-500 sm:text-sm/6"
          />
          
       
    </>
}

export default Input;