import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {

    const [number, setNumber] = useState(0);

    //causa o erro const premiumNumbers = ["0", "100", "200"];
    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"];
    },
        []);


    useEffect(() => {
        console.log("Premium Numbers foi alterado");
    }, [premiumNumbers]);


    return (
        <div>
            HookUseMemo
            <hr />
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ? <p>Acertou o número premium!</p> : <p></p>}
        </div>

    )
}

export default HookUseMemo


// UseMemo é um hook do React que memoriza o resultado de uma função 
// para evitar cálculos desnecessários em re-renderizações.
// Ele é útil quando você tem funções que realizam cálculos pesados ou operações 
// que não precisam ser recalculadas a cada renderização, 
// desde que suas dependências não mudem.