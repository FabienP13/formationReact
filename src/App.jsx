import { useState } from "react";



function App() {
  //HOOK : Ne pas faire de condition sur les hooks, ils doivent être appelés à chaque rendu du composant dans le même ordre
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 18,
  });

  const incrementAge = () => {
    // setCount(count + 1);
    setPerson((person) => ({ ...person, age: person.age + 1 }));
  }
   const incrementCount= () => {
    setCount(count + 1);
    
  }
  return (
    <>
      <p>Age de {person.firstName} {person.lastName} : {person.age}</p>
      <button onClick={incrementAge}>Gagner une année</button>
      <button onClick={incrementCount}>Incrémenter {count}</button>
    </>
  );
}

export default App;
