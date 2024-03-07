import React, { useEffect, useState } from 'react'

export const Cronometro = () => {

    const [mils, setMils] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [time, setTime] = useState(new Date());
    const [parar, setParar] = useState(false);

    useEffect(() => {
        if (!parar){
            setTime(new Date());
            changeMils();
            {mils >= 10000 && setMils(0)}
            {mils >= 10000 && setSegundos(segundos + 1)}
            {segundos >= 60 && setSegundos(0)}
            {segundos >= 60 && setMinutos(minutos + 1)}
        }
    }, [time, parar])

    const resetear = () => {
        setSegundos(0);
        setMinutos(0)
    }
    
    const stop = () => {
        setParar(!parar);
    }

    function changeMils() {
        setMils(mils+1)
    }

  return (
    <div>
        <h2>Cronometro</h2>
        <p>{minutos < 10 ? `0${minutos}` : minutos}:{segundos < 10 ? `0${segundos}` : segundos}</p>
        <button onClick={resetear}>Resetear</button>
        <button onClick={stop}>Parar</button>
    </div>
  )
}
