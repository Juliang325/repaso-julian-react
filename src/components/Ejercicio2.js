import React, { useState } from 'react'

export const Ejercicio2 = () => {
    const [day, setDay] = useState('Lunes')
  return (
    <div>
        <div class="mb-3">
            <label>Dia de la semana: </label>
            <select
                value={day}
                onChange={e => setDay(e.target.value)}
            >
                <option selected>Select one</option>
                <option value="lunes">lunes</option>
                <option value="martes">martes</option>
                <option value="miercoles">miercoles</option>
            </select>
        </div>
        <p>{day}</p>
        
    </div>
  )
}
