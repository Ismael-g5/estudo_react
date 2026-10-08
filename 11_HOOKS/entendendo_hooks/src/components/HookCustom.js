import {useState} from 'react'
import { usePrevious } from '../hooks/UsePrevius';


const HookCustom = () => {
const [number, setNumber] = useState(0);
const previousNumber = usePrevious(number);

    return (
        <div>
            <h2>Custom Hook</h2>
            <p>Valor Atual: {number}</p>
            <p>Valor Anterior: {previousNumber}</p>
            <button onClick={() => setNumber(Math.floor(Math.random() * 10))}>Alterar Número</button>
        </div>
    )
}

export default HookCustom
