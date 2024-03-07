import { useState } from "react";

export default function JuegoDeDados() {
    const [numJugadores, setNumJugadores] = useState(2);
    const [nombres, setNombres] = useState(Array(numJugadores).fill(''));
    const [puntuaciones, setPuntuaciones] = useState(Array(numJugadores).fill(0));
    const [tiradas, setTiradas] = useState(0);

    const handleNumJugadoresChange = (e) => {
        const num = parseInt(e.target.value);
        setNumJugadores(num);
        setNombres(Array(num).fill(''));
        setPuntuaciones(Array(num).fill(0));
    }

    const handleNombreChange = (e, index) => {
        const newNombres = [...nombres];
        newNombres[index] = e.target.value;
        setNombres(newNombres);
    }

    const tirarDado = () => {
        return Math.floor(Math.random() * 6) + 1;
    }

    const realizarTirada = () => {
        const nuevaPuntuacion = puntuaciones.map((p, i) => p + tirarDado());
        setPuntuaciones(nuevaPuntuacion);
        setTiradas(tiradas + 1);
    }

    const calcularMedia = (puntuacion) => {
        return puntuacion / tiradas;
    }

    const clasificacionFinal = () => {
        const clasificacion = nombres.map((nombre, index) => {
            return { nombre, puntuacion: puntuaciones[index] };
        });

        clasificacion.sort((a, b) => b.puntuacion - a.puntuacion);
        return clasificacion;
    }

    return (
        <div>
            <h2>Juego de Dados</h2>
            <label>Número de jugadores (2-4):</label>
            <input type='number' value={numJugadores} onChange={handleNumJugadoresChange} min={2} max={4}></input>
            {nombres.map((nombre, index) => (
                <div key={index}>
                    <input type='text' placeholder={`Jugador ${index + 1}`} value={nombre} onChange={(e) => handleNombreChange(e, index)}></input>
                </div>
            ))}
            <button onClick={realizarTirada}>Realizar tirada</button>
            <p>Tiradas realizadas: {tiradas}</p>
            {puntuaciones.map((puntuacion, index) => (
                <p key={index}>{nombres[index]}: {puntuacion} (Media: {calcularMedia(puntuacion)})</p>
            ))}
            <h3>Clasificación final</h3>
            {clasificacionFinal().map((jugador, index) => (
                <p key={index}>{index + 1}. {jugador.nombre}: {jugador.puntuacion}</p>
            ))}
        </div>
    )
}
