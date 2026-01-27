import React from 'react';
import { useState } from 'react';

const FourActive = () => {
  const [users, setUsers] = useState([
    {id: 1, name: "Ismael", age:20, profession:'Profissão 1'},
    {id: 2, name: "Guedes", age:22, profession:'Profissão 2'},
    {id: 3, name: "Silva", age:16, profession:'Profissão 3'}
  ]);

  return (
    <div>
      <ul>
        {users.map((item, index) => (
          <li key={index}>
            {item.name}, idade: {item.age}, profissão: {item.profession}
            {item.age >= 18 && <p>{item.name} - pode tirar CNH</p>}
            {item.age < 18 && <p>{item.name} - não pode tirar CNH</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FourActive