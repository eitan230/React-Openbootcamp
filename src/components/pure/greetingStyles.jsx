import React, {useState} from 'react'

// Definiendo estilos en constantes

// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'blue'
};

// ? Estilo para usuario no logueado

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyles = (props) => {
  
    // Generamos un estado para el componente
    // asi cont5rolar si el usuario esta logueado o no

    const [logged, setLogged] = useState(false)
    

  
  return (
    <div style={ logged ? loggedStyle : unloggedStyle}>
        { logged ? (<p>Hola, {props.name}</p>) : (<p>Please login</p>)}
        <button onClick={()=>{
            console.log('boton pulsado');
            setLogged(!logged);
        }}>
            { logged ? 'Logout' : 'Login'}
        </button>
    </div>
  )
}

export default GreetingStyles