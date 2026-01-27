//para auto-criar com 'tab' -> rafce + tab

import React from 'react'

const CarDetails = ({brand, km, color}) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km's: {km}</li>
        <li>Cor: {color}</li>

      </ul>
    </div>
  )
}

export default CarDetails