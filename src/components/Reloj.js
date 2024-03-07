import React, { useEffect, useState } from 'react'

export const Reloj = () => {

    const [time, setTime] = useState(new Date());
    useEffect(() => {
            setTime(new Date());
    }, [time]);
    

  return (
    <div>
        <h2>Reloj</h2>
        <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}
