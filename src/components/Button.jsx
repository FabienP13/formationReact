
/**
 * @export
 * @param {"danger","warning","info","success"} variant 
 */
export function Button({ variant = 'info', className ="", ...props}) {
   
    const newProps = {
        ...props,
        className: `text-white font-bold py-2 px-4 rounded hover:cursor-pointer w-fit ${className} ${getButtonVariant(variant)} `
    }

    if (props.href) {
        return <a {...newProps}/>
    }
  return <button {...newProps} />
}

function getButtonVariant(variant) {
    if(variant === "danger") {
        return "bg-red-500 hover:bg-red-700";
    }
    if(variant === "warning") {
        return "bg-yellow-500 hover:bg-yellow-400";
    }
    if(variant === "info") {
        return "bg-blue-500 hover:bg-blue-700";
    }
    if(variant === "success") {
        return "bg-green-500 hover:bg-green-700";
    }
    if(variant === "primary") {
        return "bg-indigo-500 hover:bg-indigo-700";
    }
}
