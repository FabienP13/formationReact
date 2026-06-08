import { useId } from "react";

function Input({ type, label, ...props }) {
  const id = useId();
  const InputComponent = type === "textarea" ? "textarea" : "input";
  return (
    <>
    { label && <label htmlFor={id} className="block text-base font-medium text-white">
        {label} :
      </label>
    }
      
      <InputComponent
        id={id}
        className="block min-w-0 grow border border-gray-500 rounded-lg  py-1.5 p-2 text-base focus:outline-red-500 sm:text-sm/6"
        {...props}
      />
    </>
  );
}

export default Input;
