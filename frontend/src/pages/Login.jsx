import { useState } from 'react'
import LoginContainer from '../componentes/LoginContainer'
import Button from '../componentes/Button'

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log('Formulario enviado')
    // aquí mandaría usuario y la contraseña
  }

  const handleChange = (e) => {
    // pendiente de ver cómo manejar el cambio de los inputs
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <LoginContainer>
      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Usuario */}
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

        {/* Campo Contraseña */}
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
        {/* Botón de Iniciar Sesión */}
        <Button texto="Iniciar Sesión" />
      </form>

      {/* Información de Usuarios Demo */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800 font-medium mb-2">
          Usuarios de prueba:
        </p>
        <div className="text-xs text-blue-700 space-y-1">
          <p>
            <strong>juan</strong> / password123
          </p>
          <p>
            <strong>ana</strong> / password123
          </p>
          <p>
            <strong>carlos</strong> / password123
          </p>
        </div>
      </div>
    </LoginContainer>
  )
}

export default Login
