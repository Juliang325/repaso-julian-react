import React, { useState } from 'react'

export default function AñadirTabla() {

    const [personas, setPersonas] = useState([
        {'nombre':'julian', 'edad':20}
    ]);

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)

    const addPerson = () => {
        setPersonas(prevPersonas => [
            ...prevPersonas,
            { nombre: nombre, edad: edad }
        ]);
       
        setNombre(''); // Limpiar el campo de nombre
        setEdad(0); // Reiniciar el campo de edad
        console.log(personas)
    }

    return (
        <div>
            <h2>Datos de la tabla</h2>
            <input type='text' placeholder='nombre' onChange={(e) => (setNombre(e.target.value))}></input>
            <input type='number' placeholder='edad' onChange={(e) => (setEdad(Number(e.target.value)))}></input>
            <button onClick={addPerson}>Añadir fila</button>
            <p>{nombre}, {edad}</p>
            {personas.map((value, index) => {
                return <p key={index}>{value.nombre}</p>
            }) 

            }
        </div>
    )
}
