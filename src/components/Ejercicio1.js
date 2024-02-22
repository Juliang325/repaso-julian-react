import React, { useState } from 'react'

export const Ejercicio1 = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [resultado, setResultado] = useState(0)
    const sumar = () => {
        setResultado(num1+num2)
        alert(`El resultado de la suma es: ${resultado}`);
    }
  return (
    <div>
        <div class="mb-3">
            <label for="" class="form-label">Num1 : </label>
            <input
                type="number"
                value={num1}
                onChange={ e => setNum1(Number(e.target.value))}
            />
            <br/>
            <label for="" class="form-label">Num1 : </label>
            <input
                type="number"
                value={num2}
                onChange={ e => setNum2(Number(e.target.value))}
            />
            <br/>
            <input
                class="btn btn-primary"
                type="button"
                value="SUMAR"
                onClick={sumar}
            />
            

        </div>
        
    </div>
  )
}
