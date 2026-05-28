import { useRef } from "react";
import InputRef from "./forms/InputRef";

function HookUseRefv2() {
    const ref = useRef();

    return<div>
        <InputRef label="Prefix" ref={ref}/>

    </div>

}

export default HookUseRefv2;