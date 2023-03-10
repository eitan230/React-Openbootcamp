import React, { useState } from 'react'

export const FirstComponent = () => {
  
  const cursos = ["React", "JavaScript", "HTML y CSS", "Python", "TypeScript", "Angular", "Vue"]
  
  const [nombre, setNombre] = useState("Eitan")
  const cambiarNombre = () => {
      setNombre(input.value);
  }
  const input = document.querySelector(".arbol")
  console.log(input)

  return (
            <div>
                <h1>{nombre}</h1>
            
              <input type="text" className="arbol"></input>
              <button onClick={cambiarNombre}>Cambiar name</button>

              <ul>
                {
                  cursos.map( (curso, indice) => {
                    return (<li key={indice}>
                      {curso}
                    </li>)
                  })
                }
              
              </ul>
            </div>

  )
}
