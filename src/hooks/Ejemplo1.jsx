/*
    Ejemplo de uso del hook useState

    - Crear componente de tipo funcion y acceder a su estado
    privado a traves de un hook y ademas, poder modificarlo

*/

import React, { useState } from 'react';

const Ejemplo1 = () => {
    
    // Valor inicial para un contador
    const valorInicial = 0 ;
    
    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@gmail.com'
    }

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        setContador(contador + 1)
    }

    function actualizarPersona(){
        setPersona(
            {
            nombre: 'Pepe',
            email: 'pepe@imaginagroup.com'
            }
        )
    }

    return (
        <div>
             <h1>*** Ejemplo de useState() ***</h1>
             <h2>CONTADOR {contador}</h2>
             <h2>DATOS DE LA PERSONA:</h2>
             <h3>NOMBRE {persona.nombre}</h3>
             <h3>EMAIL {persona.email}</h3>
             <button onClick={incrementarContador}>Incrementar Contador</button>
             <button onClick={actualizarPersona}>Incrementar Contador</button>
        </div>
    );
}

export default Ejemplo1;
