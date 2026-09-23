import { useEffect, useState } from 'react'

// o useEffect é um hook que permite executar efeitos colaterais
//  em componentes funcionais. Ele é chamado após a renderização
//  do componente e pode ser usado para realizar operações como
//  buscar dados, manipular o DOM, configurar assinaturas,
//  entre outros.

// exemplo basico, sem array de depedencias

const HookUseEffect = () => {
    useEffect(() => {
        console.log('Componente montado ou atualizado, estou sendo montado');
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    }

    // Uso de useEffect com array de dependências(array vazio ao fim da const)
    useEffect(() => {
        console.log('Serei Executado apenas 1 vez');
    }, []);


    // Uso de useEffect com array de dependências(array com variavel ao fim da const, com valor)
    const [anotherNumber, setAnotherNumber] = useState(0);


    /* useEffect(() => {
         if(anotherNumber > 0) {
             console.log('Serei Executado quando anotherNumber for atualizado');
         }
     }, [anotherNumber])
    */

    // CleanUp com useEffect, é uma função que é executada quando o componente é desmontado
    //  ou quando o efeito é re-executado.
    const timerValue = 2000
    useEffect(() => {

        const timer = setTimeout(() => {
            console.log('Olá mundo, estou sendo executado após ' + timerValue + 'ms');
        }, timerValue);

        //função anonima que impede do useEffect ser executado mais de uma vez, 
        // quando o componente é desmontado
        return () => clearTimeout(timer);

    }, [anotherNumber])


    return (
        <div>
            <h2>HookUseEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Change Something</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Change Another Number</button>
        </div>
    )
}

export default HookUseEffect
