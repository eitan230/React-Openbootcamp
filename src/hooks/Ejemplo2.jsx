/**
 * Ejemplo de uso de:
 * useState()
 * useRef()
 * useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintios cada uno en un estado diferente

    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    // Vamos a crear una referencia cons useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)

    const miRef = useRef()

    function incrementar1() {
        setcontador1(contador1 + 1)
    }

    function incrementar2() {
        setcontador2(contador2 + 1)
    }

    /**
    * Caso 1: Ejecutar siempre un snippet de codigo
    * Cada vez que haya un cambio en el estado del componente
    * se ejecuta aquello que este dentro del useEffect()

    */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE")
    //     console.log(miRef)
    // })

    /**
    * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1
    * Cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffect()
    * Cuando cambie contador 2 no habra ejecucion

    */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1")
    //     console.log(miRef)
    // }, [contador1]);

    /**
    * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1 o CONTADOR2
    * Cada vez que haya un cambio en el contador 1 y 2, se ejecuta lo que diga el useEffect()

    */

    useEffect(() => {
        console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2")
        console.log(miRef)
    }, [contador1, contador2]);



    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2> CONTADOR1: {contador1} </h2>
            <h2>CONTADOR2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}> 
                Ejemplo de elemento referenciado
            </h4>

            {/* Botones para cambiar los contadores*/}
            <button onClick={incrementar1}>Incrementar Contador1</button>
            <button onClick={incrementar2}>Incrementar Contador2</button>

        </div>
    );
}

export default Ejemplo2;
