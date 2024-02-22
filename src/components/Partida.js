import React, { useState } from 'react'

export const Partida = () => {
    const [nJugadores, setJugadores] = useState(2)
    return (
        <div>
            <div class="mb-3">
                <label>Dia de la semana: </label>
                <select
                    value={nJugadores}
                    onChange={e => setJugadores(Number(e.target.value))}
                >
                    <option selected>Select one</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <p>{nJugadores}</p>
            <br/>
            <input
                type="button"
                value="Jugar"
            />
        </div>
    )
}
