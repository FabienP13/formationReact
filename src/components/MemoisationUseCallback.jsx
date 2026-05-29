import { useState, memo, useMemo, useCallback } from "react";
import Input from "./forms/Input";

/** 
  Un composant est re-render quand :
    1- Il y a un changement d'état (state) dans le composant lui-même ou dans l'un de ses enfants
    2- Si le composant parent est re-render, le composant Enfant aussi 
*/

/**
 Memoisation : technique d'optimisation qui consiste à stocker le résultat d'une fonction coûteuse en mémoire pour éviter de la recalculer à chaque rendu. En React, on peut utiliser le hook useMemo pour mémoriser une valeur calculée et useCallback pour mémoriser une fonction. Cela permet d'améliorer les performances en évitant des calculs inutiles ou des re-renders de composants enfants qui dépendent de ces valeurs ou fonctions.
 */

function MemoisationUseCallback() {
//   const handleClick = useMemo(() => {
//     return () => {
//       console.log("Hello");
//     };
//   }, []);
  const handleClick = useCallback(() => {
      console.log("Hello");
  }, []);

  return (
    <>
      <div className="m-2 gap-2 ">
        <Demo />
        <InfoMemo onClick={handleClick} />
      </div>
    </>
  );
}

function Demo() {
  const [name, setName] = useState("");
  return (
    <div>
      <Input label="Prénom" onChange={setName} value={name} />
      <div>{name.toUpperCase()}</div>
    </div>
  );
}

const InfoMemo = memo(function Info({ onClick }) {
  console.log("InfoMemo", "render");
  return (
    <div
      className="p-4 my-4 text-sm text-fg-danger-strong bg-blue-300 w-fit flex items-center rounded-md bg-danger-soft"
      onClick={onClick}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat
      aperiam repellat animi nemo molestias dolorem libero dolorum sint
      reiciendis?
    </div>
  );
});

export default MemoisationUseCallback;
