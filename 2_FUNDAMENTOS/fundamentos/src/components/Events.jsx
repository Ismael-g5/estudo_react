const Events = () => {
  
const handleMyEvent = () => {
  console.log('Evento Ativado!')
  //importante: chamar apenas o NomeFuncao ao inves de NomeFunca()
}

const renderSomething = (x) => {
  if(x){
   return <h1>A primeira condição renderiza se o x for true</h1>
  }
  else{
      return  <h1>A segunda condição é se o x for false</h1>
  }
};
  return (
  <div >
    <div>
      <button onClick={handleMyEvent}> Clique aqui!!!</button>
      <div>
              <button onClick={() => console.log('outro clique(clicou)')}>Clique aqui também </button>

      </div>
    </div>
    {renderSomething(true)}
    {renderSomething(false)}

  </div>
  );
}

export default Events;