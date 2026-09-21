import {useState} from 'react'

const HookUseState = () => {
    // 1 useState, uso mais comums
    let userName = 'Ismael';

const [name, setName] = useState('Guedes da Silva');

//useState estimula a renderização do componente, quando o estado é alterado, o componente é renderizado novamente.

const chageNames = () => {
    userName = 'Ismael Guedes da Silva';

    setName("Miguel Guedes da Silva");
}

// 2 Inputs 

const [age, setAge] = useState(18);

const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);

    //ou envio a uma api
}
    return (
    <div>
        <h2>HookUseState</h2>
        <p>Variavél: {userName}</p>
        <p> UseState: {name}</p>
        <p> Idade: {age}</p>
        <button onClick={chageNames}>Alterar Nome</button>
        {/* formulario que se conecta ao useState*/}
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
            />
            <input type="submit" value="Enviar"/>
        </form>

    </div>
  )
}

export default HookUseState
