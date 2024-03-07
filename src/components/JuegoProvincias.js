/* Tenemos 3 provincias y 6 localidades, el juego consiste en que vayan saliendo las localidades y responder con alguna de las 3 provincias*/
import React, { useEffect, useState } from 'react'

export default function JuegoProvincias() {

    const [respuesta, setRespuesta] = useState('');
    const [numAle, setNumAle] = useState(0);
    const [numAciertos, setNumAciertos] = useState(0);
    const [numErrores, setNumErrores] = useState(0);

    const provincias = ['Sevilla', 'Cadiz', 'Huelva']

    const localidades = [
        {'ciudad' : 'Sevilla','nombre' : 'Mairena'},
        {'ciudad' : 'Sevilla','nombre' : 'Ecija'},
        {'ciudad' : 'Cadiz','nombre' : 'Caleta'},
        {'ciudad' : 'Cadiz','nombre' : 'Chipiona'},
        {'ciudad' : 'Huelva','nombre' : 'Matalascañas'},
        {'ciudad' : 'Huelva','nombre' : 'Mazagon'},
    ]

    const sortear = () => {
        const numAleatorio = Math.round(Math.random() * (localidades.length - 1));
        setNumAle(numAleatorio);
        console.log(numAleatorio);
    }

    function responder  ()  {
        if ( respuesta === localidades[numAle].ciudad){
            console.log('Has acertado');
            let numAciertosRef = numAciertos + 1;
            setNumAciertos(numAciertosRef);
            
        }else{
            console.log('No has acerdado');
            let numErroresRef = numErrores + 1;
            setNumErrores(numErroresRef);
        }
        setNumAle(numAle);
        console.log(numAle);
    }

   



    return (
        <div>
            <h2>Juego provincias</h2>
            <p>Localidad: {localidades[numAle].nombre}</p>
            <label>Provincia: </label>
            <select
                value={respuesta}
                onChange={e => setRespuesta(e.target.value)}
            >
                <option selected>Select one</option>
                <option value="Sevilla">{provincias[0]}</option>
                <option value="Cadiz">{provincias[1]}</option>
                <option value="Huelva">{provincias[2]}</option>
            </select>
            <hr />
            <button onClick={sortear}>Lanzar</button>
            <button onClick={responder}>Responder</button>
            <hr/>
            <p>Aciertos: {numAciertos} - Errores: {numErrores}</p>
        </div>
    )
}
