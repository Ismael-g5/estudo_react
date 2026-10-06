const HookUseMemo = () => {
  return (
    <div>HookUseMemo</div>
  )
}

export default HookUseMemo


// UseMemo é um hook do React que memoriza o resultado de uma função 
// para evitar cálculos desnecessários em re-renderizações.
// Ele é útil quando você tem funções que realizam cálculos pesados ou operações 
// que não precisam ser recalculadas a cada renderização, 
// desde que suas dependências não mudem.