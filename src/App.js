import './App.css';
import { Counter } from './components/Counter';
import { Ejercicio1 } from './components/Ejercicio1';
import { Ejercicio2 } from './components/Ejercicio2';
import { Ejercicio3 } from './components/Ejercicio3';
import { Ejercicio4 } from './components/Ejercicio4';
import { Ejercicio5 } from './components/Ejercicio5';
import { EjercicioListas } from './components/EjercicioListas';
import { Partida } from './components/Partida';
import { Pruebecita } from './components/Pruebecita';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Ejercicio1/>
        <hr/>
        <Ejercicio2/>
        <hr/>
        <Ejercicio3/> 
        <Ejercicio4/>
        <Ejercicio5/>
        <Partida/>
        <Pruebecita></Pruebecita>
        <Counter></Counter>
        */}
        <EjercicioListas/>
        
        
      </header>
    </div>
  );
}

export default App;
