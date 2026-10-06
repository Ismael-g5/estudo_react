import { useEffect, useState, useRef } from "react"


const HookUseRef = () => {

    // o UseRef pode ser usado como useState,
    //  porem ele é um objeto, seu valor esta 
    // na propriedade current, o detalhe aqui é que ele não re-renderiza o component ao ser alterado

    //useRef
    const numberRef = useRef(0);
    const [counter, setCounter] = useState(0);
    const [counterB, setCounterB] = useState(0);

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    
    // 2  - useRef e DOM
    const inputRef = useRef();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(inputRef)
        setText("")

        inputRef.current.focus(); //foca no input apos o envio
    }

    return (
        <div>
            <h2>useRef</h2>
            <p>O componente renderizou: {numberRef.current} vezes.</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador</button>

            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>

            {/* useRef e DOM*/}
            <form onSubmit={handleSubmit}>

            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="enviar"/>

            </form>

        </div>
    )
}

export default HookUseRef
