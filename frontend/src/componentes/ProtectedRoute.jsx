import { Navigate } from 'react-router'
function ProtectedRoute(props) {
  const isAuthenticated = false // Aquí deberías implementar tu lógica de autenticación real

  if (!isAuthenticated) {
    //return <h1>¡¡¡¡¡Acceso Denegado!!!!!</h1> // Redirige al login si no está autenticado
    return <Navigate to="/login" replace />
  }

  return props.children
}

export default ProtectedRoute
