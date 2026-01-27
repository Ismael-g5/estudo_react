import { useState } from "react";

const ConditionalRender = () => {
const [x] = useState(true)

const [name] = useState("João")
  return (
    <>
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {name === "João" ? (
        <div>O nome é João</div>
      ) : (
        <div>Nome não encontrado</div>
      )}
    </div>
    </>
  )
}

export default ConditionalRender;