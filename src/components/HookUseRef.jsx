import { useEffect, useMemo, useRef, useState } from "react";
import Input from "./forms/Input";

function HookUseRef() {

  // useRef est un hook qui permet de créer une référence à un élément du DOM ou à une valeur persistante entre les rendus d'un composant. Il est souvent utilisé pour accéder directement à un élément du DOM, stocker une valeur mutable ou conserver une référence à une fonction.
  const prefixRef = useRef(null); 
  // const prefixRef = useMemo(() => ({ current: null }), []); //Meme comportement qu'avec useRef(null)
  const [prefix, setPrefix] = useState('');
  prefixRef.current = prefix; // On met à jour la référence à chaque rendu

  useEffect(() => {
    
    const timer = setInterval(() => {
      console.log(prefixRef.current);
    }, 1000);
    return () => clearInterval(timer);
  }, []) // Inutile de mettre ref dans le tableau de dépendances car il ne change pas entre les rendus | ni aucun setter 

  return <div>
    <Input label="Prefix" value={prefix} onChange={setPrefix} placeholder="Entrez un préfixe" />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptates nam, magni repellendus quis, vero labore obcaecati, sit debitis nisi deleniti? Illo nemo dolore, commodi repudiandae quaerat delectus officia est?
      Doloremque odio sed quaerat in hic quas debitis possimus quibusdam maiores commodi nisi, recusandae, dicta deleniti illo itaque et facilis, autem facere. Repellendus architecto mollitia ullam natus repudiandae, officiis pariatur?
      At doloremque minima blanditiis atque, saepe laborum quas, ab cupiditate beatae repellendus consectetur quisquam? Odio, nam tenetur a dolore, animi natus obcaecati eos, quae est quisquam unde autem ipsum consequatur.
      Ullam sint quos blanditiis soluta nam, magni qui nobis temporibus quasi, fuga sequi doloremque in dicta perferendis repellendus suscipit atque, velit molestias aperiam hic? Eius cumque officiis corrupti numquam? Vel.
  </div>

}

export default HookUseRef;