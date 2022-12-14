import logo from './logo.svg';
import Component from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from "./components/Estado";
import RenderizadoCondicional  from "./components/RenderizadoCondicional";
import './App.css';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6,EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';

function App() {
  let auth =false;
  let nombre = "Manuel";
  let numeros = ['1','2', '3', '4'];
  return (
    <section>

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
          <section>
            <Component msg="Hola soy un componente funcional expresado desde una prop"/>
            <hr></hr>
            <Propiedades 
              cadena="Hola soy una cadena de una prop" 
              numero={21} 
              booleano={true}
              arreglo={[1,2,3]}
              objeto={{nombre:"Manuel", correo: "mdiaz_19@alu.uabcs.mx"}}
              funcion = {(num)=> num*num}
              elementoReact={<i>Elemento react como prop</i>}
              componenteReact={<Component msg="Soy un componente pasado como prop"/>
            }
            />
          
          </section>
          <hr/>

          <section>
            <Estado/>
            <hr/>
            <RenderizadoCondicional/>
            <hr/>
            <RenderizadoElementos/>
            <hr/>
            <EventosES6/>
            <hr/>
            <EventosES7/>
            <hr/>
            <MasSobreEventos/>
            <hr/>
            <ComunicacionComponentes/>
            <hr/>
            <CicloVida/>
          </section>
        </header>
      </div>
    </section>

  );
}

export default App;
