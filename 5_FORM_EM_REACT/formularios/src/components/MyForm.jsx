import {React, useState} from 'react'
import './css/MyForm.css'

const MyForm = ({user}) => {
  //3 - gerenciamento de dados
  const [name, setName] = useState(user? user.name : 'nome do usuário não encontrado')
  const [email, setEmail] = useState(user ? user.email : 'email do usuário não encontrado')
  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");
  const handleName = (e) => {
    setName(e.target.value)
    // forma padrão de envio para o formulário
  };
  console.log(name)
const handleSubmit = (event) => {
  event.preventDefault();

  //limpar formulario
  setName("");
  setEmail("");
}
  return (
    <>
      <div>MyForm</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder='digite seu nome' onChange={handleName} value={name} />
        </div>
        
        <label>
          <span>E-mail</span>
          <input type="text" name="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
      {/* text area*/}
      <label htmlFor="">
      <span>Bio: </span>
      <textarea name="bio" placeholder="Descrição do usuário" onChange={(e => setBio(e.target.value))} value={bio}></textarea>
      </label>

      {/*  input select*/}
      <label htmlFor="">
        <span>Selecione uma opção: </span>
        <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="user">Usuário</option>
          <option value="editor">Editor</option>
          <option value="admin">Administrador</option>
        </select>
      </label>

        {/* no email ocorre uma simplificação, chamando o evento direto no onChange */}
        <input type="submit" value="enviar"/>
      </form>
    </>
  )
}

export default MyForm