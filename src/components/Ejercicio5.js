import React, { useState } from 'react'

export const Ejercicio5 = () => {
    const [resultado, setResultado] = useState(0)
    function lanzar() {
        setResultado(Math.round(Math.random()*5+1))
    }
  return (
    <div>
        <p>{resultado}</p>
        <input
            type="button"
            value="Lanzar"
            onClick={lanzar}
        />
        
    </div>
  )
}
