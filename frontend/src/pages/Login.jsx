import { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log('Intentando iniciar sesión...')
    // aqui iria la logica de autenticacion
  }
  // TODO pendiente de ver e implementar
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <>
      <h1>Hola Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.username}
          type="text"
          placeholder="Usuario"
          onChange={handleChange}
        />
        <input
          value={formData.password}
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
