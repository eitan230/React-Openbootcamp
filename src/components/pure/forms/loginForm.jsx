/**
 * Componente que va a contener un formulario para
 * autenticacion de usuarios
 */

import React from 'react'

const LoginForm = () => {
  const initialCredentials = {
    user: '',
    password:''
  }

  const [credentials, setCredentials] = useState(initialCredentials)
  
    return (
    <div>LoginForm</div>
  )
}

export default LoginForm