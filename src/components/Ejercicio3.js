import React, { useState } from 'react'

export const Ejercicio3 = () => {
    const [palabra, setPalabra] = useState('')
  return (
    <div>
        <div class="mb-3">
            <label>Casilla1: </label>
            <input
                type="text"
                value={palabra}
                onChange={e => setPalabra(e.target.value)}
                
            />
        </div>
        <div class="mb-3">
            <label>Casilla2: </label>
            <input
                type="text"
                value={palabra}
                onChange={e => setPalabra(e.target.value)}
                
            />
        </div>
        
    </div>
  )
}
