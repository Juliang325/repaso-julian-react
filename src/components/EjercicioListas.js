import React, { useState } from 'react'

export const EjercicioListas = () => {

    const [lista, setLista] = useState([
        { nombre: "Juan", edad: 30 },
        { nombre: "María", edad: 28 },
        { nombre: "Luis", edad: 25 }
    ]);

    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState(0)

    const addItem = () => {
        setLista(prevItems => [...prevItems,  { nombre , edad }])
    }

    const removeItem = (index) => {
        setLista(prevItems => {
            return prevItems.filter((item, i) => i !== index);
        });
    }

    const removeLastItem = () => {
        setLista(prevItems => prevItems.slice(0, -1));
    }

    const removeFirstItem = () => {
        setLista(prevItems => prevItems.slice(1));
    }


    return (
        <div>
            <div>
                <ul>
                    {lista.map((persona, index) => (
                        <li key={index}>
                            {persona.nombre}, {persona.edad} 
                            <button onClick={() => removeItem(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>

            </div>
            <div>
                <label>
                    Nombre: 
                    <input type='text' onChange={(e) => setNombre(e.target.value)}></input>
                </label>
                <br/>
                <lable>
                    Edad: 
                    <input type='number'onChange={(e) => setEdad(Number(e.target.value))}></input>
                </lable>
                <br/>
                <button onClick={addItem}>Add persona</button>
                <button onClick={removeLastItem}>Borrar ultima persona</button>
                <button onClick={removeFirstItem}>Borrar primera persona</button>
                <p>{nombre}, {edad}</p>
            </div>
        </div>
    )
}
