import logo from './logo.svg';
import './App.css';

function App() {
  let auth =false;
  let nombre = "manuel";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.

        </p>
        {/* Pruebas */}
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        <p>
          {auth ? "El usuario: " + nombre +" ha sido logueado" : "No hay una sesion activa"}
        </p>
        {/* End pruebas */}

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
