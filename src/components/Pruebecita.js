import React from 'react'

export const Pruebecita = () => {
    const mostrarMensaje = true;
    const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

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
        </div>
    );
};

