import { useState } from 'react'
import LoginContainer from '../componentes/LoginContainer'
import Button from '../componentes/Button'
import DisplayUsers from '../componentes/DisplayUsers'

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // try catch finally para manejar errores de autenticación
    //alert(`Usuario: ${formData.username}\nContraseña: ${formData.password}`)
    // Aquí iría la lógica de autenticación
    //console.log('Formulario enviado')
    // aquí mandaría usuario y la contraseña
  }

  const handleChange = (e) => {
    //console.log(e)
    // pendiente de ver cómo manejar el cambio de los inputs
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Usuario
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="
                  w-full px-4 py-3 rounded-lg border border-gray-300
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200
                "
            placeholder="juan"
            autoComplete="username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="
                  w-full px-4 py-3 rounded-lg border border-gray-300
                  focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  transition-all duration-200
                "
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </div>

        <Button texto="Iniciar Sesión" />
      </form>
      <DisplayUsers />
    </LoginContainer>
  )
}

export default Login
