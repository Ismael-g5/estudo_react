import {useReducer, useState} from 'react'

const HookUseReducer = () => {
    //começando como useReducer -> o useReducer é usado para gerenciar estados mais complexos, onde o useState pode se tornar difícil de gerenciar. 
    // Ele é baseado em um padrão de design chamado "Reducer", que é uma função que recebe o estado atual e uma ação, e retorna um novo estado.
    // resumindo, altera o valor e executa uma função(dispatch) ao mesmo tempo
    const [number, dispatch] = useReducer((state, action) => {
        return Math.floor(Math.random(state) * 3);
    })

    // avançando no usoReducer
    const initialTasks = [
        { id: 1, text: "Tarefa 1" },
        { id: 2, text: "Tarefa 2" },
        { id: 3, text: "Tarefa 3" },
    ]


    //função handleSubmit para adicionar uma nova tarefa
    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskText.trim() !== "") {
            dispatchTasks({ type: "ADD", text: taskText });
            setTaskText("");
        }               
    }

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: action.text, //state que vem do useState
                };
                return [...state, newTask];
            case "REMOVE":
                return state.filter((task) => task.id !== action.id);
            default:
                return state;
        }
    };
    
       //useState
    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks); //(taskReducer -> quem altera, initialTasks -> valor inicial)
 

    return (
    <div>
        <h2>HookUseReducer</h2>
        
        <p>Numero: {number}</p>
        <button onClick={() => dispatch()}>Gerar Numero</button>
        <hr/>

        <h3>Lista de Tarefas</h3>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Digite uma nova tarefa"
            />
            <input type="submit" value="Adicionar" />
        </form>

        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => dispatchTasks({ type: "REMOVE", id: task.id })}>Remover</button>
                </li>
            ))}
        </ul>
        <button onClick={() => dispatchTasks({ type: "ADD", text: `Tarefa ${tasks.length + 1}` })}>Adicionar Tarefa</button>    
        
    </div>
  )
}

export default HookUseReducer
