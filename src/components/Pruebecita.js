import React, { useState } from 'react'

export const Pruebecita = () => {
    const [mostrarMensaje, setMostrarMensaje] = useState(true);
    const [elementos, setElementos] = useState(['Elemento 1', 'Elemento 2', 'Elemento 3']);

    const toggleMensaje = () => {
        setMostrarMensaje(!mostrarMensaje);
    };

    const agregarElemento = () => {
        const nuevoElemento = `Elemento ${elementos.length + 1}`;
        setElementos([...elementos, nuevoElemento]);
    };

    const borrarElemento = () => {
        if (elementos.length > 0) {
            const nuevaLista = elementos.slice(0, -1);
            setElementos(nuevaLista);
        }
    };

    let mensaje;
    if (mostrarMensaje) {
        mensaje = <p>Este es un mensaje condicional</p>;
    }

    let listaElementos = elementos.map((elemento, index) => (
        <li key={index}>{elemento}</li>
    ));

    return (
        <div>
            {mensaje}
            <ul>
                {listaElementos}
            </ul>
            <button onClick={agregarElemento}>Agregar Elemento</button>
            <button onClick={borrarElemento}>Borrar Último Elemento</button>
            <button onClick={toggleMensaje}>
                {mostrarMensaje ? 'Ocultar Mensaje' : 'Mostrar Mensaje'}
            </button>
        </div>
    );
};

