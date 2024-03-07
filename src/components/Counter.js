import React, { useState } from 'react'

export const Counter = () => {
    const [num, setNum] = useState(0)
    const [show, setShow] = useState(true)

    const sumar = () => {setNum(num+1)}
    const restar = () => {setNum(num-1)}
    const cambiar = () => {setShow(!show)}

  return (
    <div>
        {show === true && <h1>{num}</h1>}
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button><br></br>
        <button onClick={cambiar}>{show === true ? "ocultar" : "mostrar"}</button>
    </div>
  )
}
