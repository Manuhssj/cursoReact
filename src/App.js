import logo from './logo.svg';
import './App.css';
import Component from './components/Componente';

function App() {
  let auth =false;
  let nombre = "Manuel";
  let numeros = ['1','2', '3', '4'];
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

        {numeros.map((es,index) => (
          <li key={index}>{es}</li>
        ))}

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <section>
        <Component msg="Hola soy un componente funcional expresado desde una prop"/>
      </section>
    </div>
  );
}

export default App;
