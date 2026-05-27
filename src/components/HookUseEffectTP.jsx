import { useEffect, useState } from "react";
import Input from "./forms/Input";

function HookUseEffectTP() {
    const [duration, setDuration] = useState(5);
    const [secondsLeft, setSecondsLeft] = useState(duration);

    const handleChange = (v) => {
        setDuration(v);
        setSecondsLeft(v);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft(v => {
                if (v <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return v - 1;
            });
        }, 1000)
        return () => clearInterval(timer);
    }, [duration]);
        
    return <div className="flex flex-col items-center mt-5">
        <Input 
            value={duration}
            onChange={handleChange}
            placeholder="Timer"
        />
        <p>
            Décompte : {secondsLeft}
        </p>
    </div>
}   

export default HookUseEffectTP;