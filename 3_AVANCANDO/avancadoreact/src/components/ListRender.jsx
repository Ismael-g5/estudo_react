import { useState } from 'react';

const ListRender = () => {
  const [users, setUsers] = useState([
    {id: 1, name: "Ismael"},
    {id: 2, name: "Guedes"},
    {id: 3, name: "Silva"}
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setUsers((prevUsers) =>{
      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }
  
  return (
    <div>
      <h2>ListRender:</h2>
      <ul>
        {users.map((item, index) => (
          <li id={index}>{item.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar um usuário aletario!</button>
    </div>
  );
};

export default ListRender;