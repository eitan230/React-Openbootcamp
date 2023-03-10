import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import React, {useState} from 'react';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/containers/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name={"Martin"}/>*/}
        {/*<GreetingF name="Andrew"/>*/}
        {/*<FirstComponent></FirstComponent>*/}
        {/* Componente de Listado de tareas */}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/* <Ejemplo2></Ejemplo2> */}
        <MiComponenteConContexto></MiComponenteConContexto>
        <Ejemplo4 nombre="Martin">
          {/*Todo lo que hay aca adentro es tratado como el props.children */}
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
    
  );
}


export default App;
